import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => (
      <li key={song.id}>{song.title}</li>
    ));
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <h1>SongList</h1>
        {!this.props.data.loading ? (
          this.renderSongs()
        ) : (
          <p>Loading Song List</p>
        )}
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
