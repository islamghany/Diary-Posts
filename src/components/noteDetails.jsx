import React from "react";
import { connect } from "react-redux";
import SubmitComment from "./submitComment";
import _ from "lodash";

class noteDatails extends React.Component {
  renderComments() {
    const { note } = this.props;
    return _.map(note.comments, (comm, key) => {
      return (
        <div className="message default" key={key}>
          <div className="message__header">{comm.dispalyName}</div>
          <div className="message__content">
            <div>{comm.comment}</div>
          </div>
        </div>
      );
    });
  }
  render() {
    const { note } = this.props;
    return (
      <div className="form__wrapper mg-tp">
        {note["sharedNote"] ? (
          <div className="message white post">
            <div className="message__header">
              <div className="user">
                <div className="user__info">
                  <img className="user__image" alt="user" src={note.photoURL} />
                  <h1 className="heading font-sm capitalize mont">
                    {note.displayName}
                  </h1>
                </div>
              </div>
            </div>
            <div className="message__content">
              <h1 className="heading font-lg rele capitalize">
                {note.caption}
              </h1>
              <div>
                <div className="message white post">
                  <div className="message__header">
                    <div className="user">
                      <div className="user__info">
                        <img
                          className="user__image"
                          alt="user"
                          src={note.sharedNote.photoURL}
                        />
                        <h1 className="heading font-sm capitalize mont">
                          {note.sharedNote.displayName}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="message__content">
                    <h1 className="heading font-md rele capitalize">
                      {note.sharedNote.text}
                    </h1>
                    <p className="heading font-ty src">
                      {note.sharedNote.body}
                    </p>
                  </div>
                </div>
              </div>
              <h1 className="heading font-lg rele capitalize">{note.text}</h1>
              <p className="heading font-sm src">{note.body}</p>
            </div>
          </div>
        ) : (
          <div className="message white post">
            <div className="message__header">
              <div className="user">
                <div className="user__info">
                  <img className="user__image" alt="user" src={note.photoURL} />
                  <h1 className="heading font-sm capitalize mont">
                    {note.displayName}
                  </h1>
                </div>
              </div>
            </div>
            <div className="message__content">
              <h1 className="heading font-lg rele capitalize">{note.text}</h1>
              <p className="heading font-sm src">{note.body}</p>
            </div>
          </div>
        )}
        <SubmitComment id={this.props.match.params.id} />
        <div>{this.renderComments()}</div>
      </div>
    );
  }
}
const mapState = (state, ownProps) => {
  return { note: state.notes[ownProps.match.params.id] };
};
export default connect(mapState)(noteDatails);
