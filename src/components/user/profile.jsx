import React from "react";
import { connect } from "react-redux";
import { currentUser } from "../../action";
import LoadingComponent from "../loadingComponent.jsx";
import { Link } from "react-router-dom";
import UserModel from "../userModel";
import ShareModel from "../shareModel";
import RenderShared from "../posts/renderShared";
import RenderPosted from "../posts/renderPosted";

class Profile extends React.Component {
  state = {
    likedPosts: "",
    type: "liked",
    post: {},
    id: ""
  };
  componentDidMount() {
    this.props.currentUser(this.props.match.params.id);
    this.setState({ id: this.props.match.params.id });
  }
  componentDidUpdate() {
    if (this.state.id !== this.props.match.params.id) {
      this.setState({ id: this.props.match.params.id });
      this.props.currentUser(this.props.match.params.id);
    }
  }

  renderModelOfUser = (note, type) => {
    if (note[type]) {
      this.setState({ likedPosts: note[type], type: type });
      document.querySelector("#model").classList.toggle("scale");
    }
  };

  handelPost = posts => {
    this.setState({
      post: posts
    });
  };
  renderNotes = () => {
    const { user } = this.props;
    if (!user["posts"]) {
      return (
        <div className="font-lg lato notFound ">
          {user["info"].displayName} has no Posts Yet...!
        </div>
      );
    } else {
      const posts = Object.keys(user["posts"]).map((key, i) => {
        return user["posts"][key];
      });

      //console.log(posts);
      //  console.log(this.props.user,this.props.signedUser)

      return posts.map((post, i) => {
        const note = { ...this.props.notes[post], noteId: post };
        return note["caption"] || note["caption"] === "" ? (
          <RenderShared
            user={this.props.signedUser}
            renderModelOfUser={this.renderModelOfUser}
            handelPost={this.handelPost}
            currentUser={this.props.user}
            note={note}
            key={note.noteId}
          />
        ) : (
          <RenderPosted
            user={this.props.signedUser}
            renderModelOfUser={this.renderModelOfUser}
            handlePost={this.handelPost}
            currentUser={this.props.user}
            note={note}
            key={note.noteId}
          />
        );
      });
    }
  };
  render() {
    if (this.props.notes && this.props.user && this.props.user.info) {
      const { user } = this.props;
      return (
        <div className="profile">
          <UserModel
            likedPosts={this.state.likedPosts}
            type={this.state.type}
          />
          <ShareModel note={this.state.post} user={this.props.signedUser} />
          <div className="profile__header">
            <div className="profile__header-img mg-reight">
              <img src={user.info.photoURL} alt="" />
            </div>
            <div className="profile__header-info">
              <div className="heading font-md ald cent">
                {user.info.displayName}{" "}
                {user.info.nickname && (
                  <span className="secondary">({user.info.nickname})</span>
                )}{" "}
              </div>
              {user.info.country && (
                <p className="heading font-ty lato">
                  From: {user.info.country}
                </p>
              )}
            </div>
          </div>
         { (user.info.nickname || user.info.status ) && <div className="profile__info">
            {user.info.nickname && (
              <div className="profile__info-basic">
                <div className="profile__info-header font-lg">Basic Info</div>
                <ul className="profile__info-list ">
                  <li>
                    Nickname : <span className="ald">{user.info.nickname}</span>{" "}
                  </li>
                  <li>
                    Gender : <span className="ald">{user.info.gender}</span>{" "}
                  </li>

                  <li>
                    Birthday : <span className="ald">{user.info.date}</span>{" "}
                  </li>
                  <li>
                    Country : <span className="ald">{user.info.country}</span>{" "}
                  </li>
                </ul>
              </div>
            )}
            {user.info.status && (
              <div className="profile__info-advanced">
                <div className="profile__info-header font-lg">
                  About{" "}
                  {user.info.displayName.substr(
                    0,
                    user.info.displayName.indexOf(" ")
                  )}
                </div>
                <ul className="profile__info-list ">
                  <li>
                    Status : <span className="ald">{user.info.status}</span>{" "}
                  </li>
                  <li>
                    Bio : <span className="ald">{user.info.about}</span>{" "}
                  </li>
                </ul>
              </div>
            )}
          </div>
        }
          {this.props.user["info"].uid === this.props.signedUser.uid && (
            <div className="update">
              <Link to={`/settings`}>
                <button className="btn btn--contained-link circle">
                  Update Info
                </button>
              </Link>{" "}
            </div>
          )}
          <div className="profile__posts">
            <div className="notes form__wrapper">{this.renderNotes()}</div>
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
    notes: state.notes,
    user: state.currentUser
  };
};
export default connect(
  mapState,
  { currentUser }
)(Profile);
