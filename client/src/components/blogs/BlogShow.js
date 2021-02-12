import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog, deleteBlog } from '../../actions';

class BlogShow extends Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params._id);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.deleteBlog(this.props.match.params._id, this.props.history);
  }

  renderButtons() {

    return (
      <div>
        <button className="green btn-flat right white-text">
          Delete
          <i className="material-icons right">delete</i>
        </button>
      </div>
    );
  }

  render() {
    if (!this.props.blog) {
      return '';
    }

    const { title, content } = this.props.blog;

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <form onSubmit={this.onSubmit.bind(this)}>
        <h5>Please confirm your entries</h5>
        {/* {this.renderFields()} */}

        {this.renderButtons()}
      </form>
      </div>
    );
  }
}

function mapStateToProps({ blogs }, ownProps) {
  return { blog: blogs[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchBlog, deleteBlog })(BlogShow);
