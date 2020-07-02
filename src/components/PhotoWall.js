import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto"></Link>
      {/* <button className="addIcon" onClick={props.navigate}>
        +
      </button> */}
      <div className="photoGrid">
        {props.posts
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo
              key={index}
              post={post}
              onRemovePhoto={props.onRemovePhoto}
            />
          ))}
      </div>
    </div>
  );
  PhotoWall.propTypes = {
    posts: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired,
  };
}

export default PhotoWall;

/*export class PhotoWall extends Component {
  render() {
    return (
      <div className="photoGrid">
        {this.props.posts.map((post, index) => (
          <Photo key={index} post={post} />
        ))}
      </div>
    );
  }
}

export default PhotoWall;*/
