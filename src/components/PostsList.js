import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostsList extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div className="posts-list">
        {posts.map((post) => (
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZslnBLE2iOYLJra6cZndUA6uEI9XqWtDHjH3horDCo_tP6e6gNhqEG95_39c_rWtAxeY&usqp=CAU"
                  alt="user-pic"
                />
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">A minute</span>
                </div>
              </div>

              <div className="post-content">{post.content}</div>

              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                    alt="likes-icon"
                  />
                  <span>{post.likes.length}</span>
                </div>

                <div className="post-comments-icon">
                  <img
                    src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
                    alt="comments-icon"
                  />
                  <span>{post.comments.length}</span>
                </div>
              </div>

              <div className="post-comment-box">
                <input placeholder="Comment in" />
              </div>

              <div className="post-comments-list">
                <div>
                  <div className="post-comments-item">
                    <div className="post-comment-header">
                      <span className="post-comment-author">Bill</span>
                      <span className="post-comment-time"> A minute ago </span>
                      <span className="post-comment-likes">22</span>
                    </div>

                    <div className="post-comment-content">Random Comment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
