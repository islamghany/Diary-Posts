import React from "react";
import { connect } from "react-redux";
import {
  fetchNotes,
  saveNote,
  deleteNote,
  like,
  currentUser,
  unLike
} from "../action.js";
import { getUser } from "../useractions";
import UserModel from "./userModel";
import ShareModel from "./shareModel";
import RenderShared from "./posts/renderShared";
import RenderPosted from "./posts/renderPosted";

class App extends React.Component {
  state = {
    text: "",
    body: "",
    uid: "",
    photoURL: "",
    displayName: "",
    likedPosts: "",
    type: "liked",
    post: {},
    sortBy: "recent",
    sortedData: []
  };

  componentWillMount() {
    if (this.props.user.uid) {
      this.props.currentUser(this.props.user.uid);
    }
  }
  handleChang = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handelPost = posts => {
    this.setState({
      post: posts
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    const note = {
      text: this.state.text,
      body: this.state.body,
      uid: this.props.user.uid,
      photoURL: this.props.user.photoURL,
      displayName: this.props.user.displayName,
      postId: ""
    };
    this.props.saveNote(note, this.props.user.uid);
    this.setState({
      text: "",
      body: "",
      uid: this.props.user.uid
    });
  };

  renderModelOfUser = (note, type) => {
    if (note[type]) {
      this.setState({ likedPosts: note[type], type: type });
      document.querySelector("#model").classList.toggle("scale");
    }
  };

  renderNotes() {
    const sortBy = Object.keys(this.props.notes).map((key, i) => {
      return {
        ...this.props.notes[key],
        noteId: Object.keys(this.props.notes)[i]
      };
    });

    if (this.state.sortBy === "feature") {
      sortBy.sort((a, b) => {
        let m = a["comments"] ? Object.keys(a["comments"]).length : 0;
        let n = b["comments"] ? Object.keys(b["comments"]).length : 0;
        return n - m;
      });
    } else if (this.state.sortBy === "popular") {
      sortBy.sort((a, b) => {
        let m = a["liked"] ? Object.keys(a["liked"]).length : 0;
        let n = b["liked"] ? Object.keys(b["liked"]).length : 0;
        return n - m;
      });
    } else {
      sortBy.reverse();
    }

    return sortBy.map(note => {
      return note["caption"] || note["caption"] === "" ? (
        <RenderShared
          user={this.props.user}
          renderModelOfUser={this.renderModelOfUser}
          handelPost={this.handelPost}
          currentUser={this.props.currUser}
          note={note}
          key={note.noteId}
        />
      ) : (
        <RenderPosted
          user={this.props.user}
          renderModelOfUser={this.renderModelOfUser}
          handlePost={this.handelPost}
          currentUser={this.props.currUser}
                    note={note}

          key={note.noteId}
        />
      );
    });
  }
  handleSelect = e => {
    this.setState({
      sortBy: e.target.value
    });
  };
  render() {
    if(this.props.currUser){
    return (
      <div>
        <UserModel likedPosts={this.state.likedPosts} type={this.state.type} />
        <ShareModel note={this.state.post} user={this.props.user} />
        <div className="form__wrapper">
          <div className="form">
            <div className="form__container">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="text"
                  className="form__input"
                  maxLength="25"
                  required
                  value={this.state.text}
                  onChange={this.handleChang}
                  placeholder="Title.."
                />
                <textarea
                  name="body"
                  placeholder="Post.."
                  maxLength="255"
                  value={this.state.body}
                  required
                  onChange={this.handleChang}
                  className="form__textarea"
                ></textarea>
                <button className="btn btn--contained-info circle block mg-none mg-tp">
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr />

        <div className="notes form__wrapper">
          <div>
            <div className="form__unit select">
              <label htmlFor="sort" className="form__label mg-right">
                {" "}
                Sort by
              </label>
              <select
                name="sort"
                defaultValue={this.props.sortBy}
                onChange={this.handleSelect}
              >
                <option value="recent">Upload date</option>
                <option value="popular">Most Liked</option>
                <option value="feature">Most Commented</option>
              </select>
            </div>
          </div>
          {this.props.notes && this.renderNotes()}
        </div>
      </div>
    );
  }
  else{
    return(
      <div >loading</div>
      )
  }
  }
}
const mapState = state => {
  return {
   notes: state.notes,
    user: state.user,
   currUser: state.currentUser };
};
export default connect(
  mapState,
  { fetchNotes, saveNote, deleteNote, getUser, currentUser, like, unLike }
)(App);
