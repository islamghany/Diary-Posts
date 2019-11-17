import React from "react";
import BasicInfo from "./basicInfo";
import AboutU from "./aboutU";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { currentUser } from "../../action";
import LoadingComponent from "../loadingComponent.jsx";
import { updateProfile } from "../../useractions";

class SettingDashboared extends React.Component {
  componentWillMount() {
    if (this.props.signedUser) {
      this.props.currentUser(this.props.signedUser.uid);
    }
  }
  render() {
    if (this.props.signedUser && this.props.user) {
      const { info } = this.props.user;
      return (
        <div>
          <div className="subnav">
            <NavLink to="/settings/basic" className="left">
              Basics
            </NavLink>
            <NavLink to="/settings/about" className="right">
              About Me
            </NavLink>
          </div>

          <div>
            <Switch>
              <Redirect exact from="/settings" to="/settings/basic" />
              <Route
                path="/settings/basic"
                render={() => (
                  <BasicInfo
                    info={info}
                    updateProfile={this.props.updateProfile}
                  />
                )}
              />
              <Route
                path="/settings/about"
                render={() => (
                  <AboutU
                    info={info}
                    updateProfile={this.props.updateProfile}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      );
    } else {
      return <LoadingComponent />;
    }
  }
}
const mapState = state => {
  return {
    signedUser: state.user,
    user: state.currentUser
  };
};
export default connect(mapState, { currentUser, updateProfile })(
  SettingDashboared
);
