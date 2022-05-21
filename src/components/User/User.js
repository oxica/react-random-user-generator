import { Component } from 'react';

export default class FetchRandomUser extends Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = 'https://api.randomuser.me/';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <div>
          My name is{' '}
          {this.state.person.name.first + ' ' + this.state.person.name.last}
        </div>

        <div>I live in {this.state.person.location.state}</div>
        <img src={this.state.person.picture.large} alt="user" />
      </div>
    );
  }
}
