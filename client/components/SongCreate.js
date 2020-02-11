import React, { Component } from "react";
import { hashHistory } from "react-router";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import fetchSongs from "../queries/fetchSongs";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit() {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          title: this.state.title
        },
        refetchQueries: [{ query: fetchSongs }]
      })
      .then(() => hashHistory.push("/"));
  }

  render() {
    return (
      <div>
        <h3>Add Song</h3>
        <h5>Please add song details below.</h5>
        <form>
          <input
            placeholder="What's the song name?"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
        </form>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          onClick={this.handleSubmit}
        >
          submit song<i className="material-icons left">add</i>
        </button>
      </div>
    );
  }
}
const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
