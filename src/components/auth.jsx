import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Auth extends React.Component {
  componentDidUpdate() {
    if (this.props.userLoading === false && !this.props.user) {
      this.props.history.push("/login");
    }
  }

  render() {
    const { userLoading, user, children } = this.props;
    return userLoading === false && user ? <div>{children}</div> :null
  }
}

const mapState = state => {
  return {
    user: state.user,
    userLoading: state.loading.user
  };
};
export default withRouter(connect(mapState)(Auth));
