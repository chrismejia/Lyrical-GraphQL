import React, { Component } from "react";
import { Link } from "react-router";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSongs() {
    return this.props.data.songs.map(song => (
      <li className="collection-item" key={song.id}>
        {song.title}
      </li>
    ));
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <h3>SongList</h3>
        {!this.props.data.loading ? (
          <div>
            <ul className="collection">{this.renderSongs()}</ul>
            <Link
              to="/songs/new"
              className="btn-floating btn-large green right"
            >
              <i className="material-icons">add</i>
            </Link>
          </div>
        ) : (
          <div>
            <h5>Loading Song List</h5>
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          </div>
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
