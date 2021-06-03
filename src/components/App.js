import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/posts';
import { PostsList, Navbar, Home, Page404, LogIn, SignUp} from './index';

const Logout = () => <div>Logout</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}
         

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            {/* <Route path="/login" render={(props) => {
              return<LogIn {...props} />;
            }} /> */}
            <Route path="/login" component={LogIn} />
            <Route path="/logout" component={Logout} />
            <Route path="/signup" component={SignUp} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
