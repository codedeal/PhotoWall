import React, { Component } from "react";
import PropTypes from "prop-types";

function Photo(props) {
  const post = props.post;
  return (
    <figure className="figure">
      <img className="photo" src={post.imageLink} alt={post.description} />
      <figcaption>
        <p>{post.description}</p>
      </figcaption>
      <div className="button-container">
        <button className="button" onClick={() => props.onRemovePhoto(post)}>
          Remove
        </button>
      </div>
    </figure>
  );
  Photo.propTypes = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired,
  };
}

export default Photo;

/*export class Photo extends Component {
  render() {
    const post = this.props.post;
    return (
      <figure className="figure">
        <img className="photo" src={post.imageLink} alt={post.description} />
        <figcaption>
          <p>{post.description}</p>
        </figcaption>
        <div>
          <button className="remove-button">Remove</button>
        </div>
      </figure>
    );
  }
}

export default Photo;*/
