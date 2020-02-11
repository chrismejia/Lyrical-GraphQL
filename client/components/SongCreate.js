import React, { Component } from "react";
import gql from "graphql-tag";

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    // console.log(`${event.target.name}: ${event.target.value}`);
  }

  handleSubmit() {
    event.preventDefault();
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
          {/* <input
            placeholder="Who's it written by?"
            name="author"
            onChange={this.handleChange}
            value={this.state.author}
          /> */}
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

export default SongCreate;
