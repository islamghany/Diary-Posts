import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchNotes } from "../action";
import { getUser } from "../useractions.js";
class Loading extends React.Component {
  componentWillMount() {
    if (this.props.userLoading === undefined) {
      this.props.getUser();
    }
    if (this.props.notesLoading === undefined) {
      this.props.fetchNotes();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.notesLoading === -1 && nextProps.user !== null) {
      this.props.fetchNotes();
    }
  }

  render() {
    const { userLoading, notesLoading, children } = this.props;
    if ((!userLoading && !notesLoading) || this.props.user === null) {
      return <div>{children}</div>;
    } else {
      return (
        <div>
          <div className="loader loader3">
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapState = state => {
  return {
    user: state.user,
    userLoading: state.loading.user,
    notesLoading: state.loading.notes
  };
};
export default withRouter(
  connect(
    mapState,
    { getUser, fetchNotes }
  )(Loading)
);
