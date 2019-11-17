import React from "react";
import { connect } from "react-redux";
import { saveNote, like } from "../action";
class ShareModel extends React.Component {
  state = { caption: "" };
  hendlechang = e => {
    this.setState({
      caption: e.target.value
    });
  };
  handleSave = () => {
    const { user } = this.props;
    const userInfo = {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName
    };
    const note = {
      sharedNote: this.props.note,
      caption: this.state.caption,
      ...userInfo,
      postId: ""
    };

    this.props.saveNote(note, this.props.user.uid);
    this.props.like(this.props.note.noteId,userInfo, "shared");
    document.querySelector("#model2").classList.toggle("scale");
  };

  render() {
    return (
      <div className="model__wrapper" id="model2">
        <div className="model__body">
          <div className="model__header">Modal Header</div>
          <div className="model__cont">
            <textarea
              type="text"
              name="caption"
              value={this.state.caption}
              onChange={this.hendlechang}
              placeholder="Say something about taht..."
              maxLength="100"
              className="form__textarea-share"
            />
          </div>
          <div className="model__foot">
            <button
              className="btn btn--contained-default  mg-none mg-right"
              onClick={() => {
                document.querySelector("#model2").classList.remove("scale");
              }}
            >
              cancel
            </button>
            <button
              className="btn btn--contained-link mg-none"
              onClick={this.handleSave}
            >
              share now
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { saveNote, like }
)(ShareModel);
