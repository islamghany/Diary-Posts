import React from "react";
import { connect } from "react-redux";
import { deleteNote, like, unLike } from "../../action.js";
import { Link } from "react-router-dom";

class RenderShare extends React.Component {
  handlelove(noteid) {
    if (this.props.note.liked && this.props.note.liked[this.props.user.uid]) {
      this.props.unLike(noteid, this.props.user.uid, "liked");
    } else {
      const user = {
        displayName: this.props.user.displayName,
        photoURL: this.props.user.photoURL,
        uid: this.props.user.uid
      };

      this.props.like(noteid, user, "liked");
    }
  }
  handleSvg = noteid => {
    if (this.props.note.liked && this.props.note.liked[this.props.user.uid]) {
      return (
        <path
          style={{ fill: "#D75A4A" }}
          d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
      c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
      c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
        />
      );
    } else {
      return (
        <React.Fragment>
          <path
            fill="#262626"
            d="M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905
    c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478
    c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014
    C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25
    c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826
    c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514
    c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z"
          />
        </React.Fragment>
      );
    }
  };

  render() {
    const { note } = this.props;

    if (note) {
      return (
        <div className="message white post" key={note.noteId}>
          <div className="message__header">
            <div className="user">
              <Link to={`/profile/${note.uid}`}>
                <div className="user__info">
                  <img className="user__image" alt="user" src={note.photoURL} />
                  <h1 className="heading font-sm capitalize mont">
                    {note.displayName}
                  </h1>
                </div>
              </Link>
            </div>
            {note.uid === this.props.user.uid && (
              <button
                className="btn btn--circled-menu  dropdown"
                onClick={() => {
                  document
                    .querySelector(`#${note.noteId}`)
                    .classList.toggle("visible");
                }}
              >
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                </svg>
                <div
                  className="dropdown-menu"
                  onClick={e => {
                    e.stopPropagation();
                  }}
                  id={note.noteId}
                >
                  <span
                    onClick={() => {
                      this.props.deleteNote(note.noteId, note.postId, note.uid);
                      this.props.unLike(
                        note.sharedNote.noteId,
                        note.uid,
                        "shared"
                      );
                    }}
                  >
                    <svg
                      height="427pt"
                      viewBox="-40 0 427 427.00131"
                      width="427pt"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m232.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                      <path d="m114.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                      <path d="m28.398438 127.121094v246.378906c0 14.5625 5.339843 28.238281 14.667968 38.050781 9.285156 9.839844 22.207032 15.425781 35.730469 15.449219h189.203125c13.527344-.023438 26.449219-5.609375 35.730469-15.449219 9.328125-9.8125 14.667969-23.488281 14.667969-38.050781v-246.378906c18.542968-4.921875 30.558593-22.835938 28.078124-41.863282-2.484374-19.023437-18.691406-33.253906-37.878906-33.257812h-51.199218v-12.5c.058593-10.511719-4.097657-20.605469-11.539063-28.03125-7.441406-7.421875-17.550781-11.5546875-28.0625-11.46875h-88.796875c-10.511719-.0859375-20.621094 4.046875-28.0625 11.46875-7.441406 7.425781-11.597656 17.519531-11.539062 28.03125v12.5h-51.199219c-19.1875.003906-35.394531 14.234375-37.878907 33.257812-2.480468 19.027344 9.535157 36.941407 28.078126 41.863282zm239.601562 279.878906h-189.203125c-17.097656 0-30.398437-14.6875-30.398437-33.5v-245.5h250v245.5c0 18.8125-13.300782 33.5-30.398438 33.5zm-158.601562-367.5c-.066407-5.207031 1.980468-10.21875 5.675781-13.894531 3.691406-3.675781 8.714843-5.695313 13.925781-5.605469h88.796875c5.210937-.089844 10.234375 1.929688 13.925781 5.605469 3.695313 3.671875 5.742188 8.6875 5.675782 13.894531v12.5h-128zm-71.199219 32.5h270.398437c9.941406 0 18 8.058594 18 18s-8.058594 18-18 18h-270.398437c-9.941407 0-18-8.058594-18-18s8.058593-18 18-18zm0 0" />
                      <path d="m173.398438 154.703125c-5.523438 0-10 4.476563-10 10v189c0 5.519531 4.476562 10 10 10 5.523437 0 10-4.480469 10-10v-189c0-5.523437-4.476563-10-10-10zm0 0" />
                    </svg>{" "}
                    Delete
                  </span>
                  <Link to={`/${note.noteId}/edit`}>
                    {" "}
                    <svg
                      height="427pt"
                      version="1.1"
                      id="Capa_1"
                      width="427pt"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              d="M352.459,220c0-11.046-8.954-20-20-20h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206
        C343.505,240,352.459,231.046,352.459,220z"
                            />
                            <path
                              d="M126.459,280c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20H251.57c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20
        H126.459z"
                            />
                            <path
                              d="M173.459,472H106.57c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h245.889c22.056,0,40,17.944,40,40v123
        c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80c0-44.112-35.888-80-80-80H106.57c-44.112,0-80,35.888-80,80v352
        c0,44.112,35.888,80,80,80h66.889c11.046,0,20-8.954,20-20C193.459,480.954,184.505,472,173.459,472z"
                            />
                            <path
                              d="M467.884,289.572c-23.394-23.394-61.458-23.395-84.837-0.016l-109.803,109.56c-2.332,2.327-4.052,5.193-5.01,8.345
        l-23.913,78.725c-2.12,6.98-0.273,14.559,4.821,19.78c3.816,3.911,9,6.034,14.317,6.034c1.779,0,3.575-0.238,5.338-0.727
        l80.725-22.361c3.322-0.92,6.35-2.683,8.79-5.119l109.573-109.367C491.279,351.032,491.279,312.968,467.884,289.572z
         M333.776,451.768l-40.612,11.25l11.885-39.129l74.089-73.925l28.29,28.29L333.776,451.768z M439.615,346.13l-3.875,3.867
        l-28.285-28.285l3.862-3.854c7.798-7.798,20.486-7.798,28.284,0C447.399,325.656,447.399,338.344,439.615,346.13z"
                            />
                            <path d="M332.459,120h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206c11.046,0,20-8.954,20-20S343.505,120,332.459,120z" />
                          </g>
                        </g>
                      </g>
                    </svg>
                    Update
                  </Link>
                  <hr />
                  <span
                    onClick={() => {
                      document
                        .querySelector(`#${note.noteId}`)
                        .classList.toggle("visible");
                    }}
                  >
                    Cancel
                  </span>
                </div>
              </button>
            )}
          </div>

          <div className="message__content">
            <h1 className="heading font-lg rele capitalize">{note.caption}</h1>
            <div>
              <div className="message white post">
                <div className="message__header">
                  <div className="user">
                    <Link to={`/profile/${note.sharedNote.uid}`}>
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
                    </Link>
                  </div>
                  <button
                    className="btn btn--circled-menu "
                    onClick={() => {
                      this.props.handelPost(note.sharedNote);
                      document
                        .querySelector("#model2")
                        .classList.toggle("scale");
                    }}
                    title="share"
                  >
                    <svg
                      viewBox="0 0 512 512.00004"
                      fill="#262626"
                      height="22px"
                      width="22px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m511.824219 255.863281-233.335938-255.863281v153.265625h-27.105469c-67.144531 0-130.273437 26.148437-177.753906 73.628906-47.480468 47.480469-73.628906 110.609375-73.628906 177.757813v107.347656l44.78125-49.066406c59.902344-65.628906 144.933594-103.59375 233.707031-104.457032v153.253907zm-481.820313 179.003907v-30.214844c0-59.132813 23.027344-114.730469 64.839844-156.542969s97.40625-64.839844 156.539062-64.839844h57.105469v-105.84375l162.734375 178.4375-162.734375 178.441407v-105.84375h-26.917969c-94.703124 0-185.773437 38.652343-251.566406 106.40625zm0 0" />
                    </svg>
                  </button>
                </div>
                <div className="message__content">
                  <h1 className="heading font-md rele capitalize">
                    {note.sharedNote.text}
                  </h1>
                  <p className="heading font-ty src">{note.sharedNote.body}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="result">
            <div
              className="likes "
              onClick={() => this.props.renderModelOfUser(note, "liked")}
            >
              <span className="heading font-ty icno">
                {note["liked"] ? Object.keys(note["liked"]).length : 0}
              </span>{" "}
              <span className="heading font-ty alt">Likes</span>{" "}
            </div>
            <div className="comments text-left">
              {" "}
              <Link to={`/post/${note.noteId}`}>
                {" "}
                <span className="heading font-ty icno">
                  {note["comments"] ? Object.keys(note["comments"]).length : 0}
                </span>{" "}
                <span className="heading font-ty alt">Comments</span>
              </Link>{" "}
            </div>
          </div>
          <ul className="post__interactions">
            <li
              className="post__interactions-like"
              onClick={() => this.handlelove(note.noteId)}
              title="like"
            >
              <span className="like">
                <svg
                  version="1.1"
                  id="Capa_1"
                  width="22px"
                  height="22px"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 51.997 51.997"
                  style={{ enableBackground: "new 0 0 51.997 51.997" }}
                  xmlSpace="preserve"
                >
                  <g>{this.handleSvg(note.noteId)}</g>{" "}
                </svg>
              </span>
            </li>
            <li className="comment">
              <Link to={`/post/${note.noteId}`}>
                {" "}
                <div className="post__interactions-comment" title="comment">
                  <span className="comment">
                    <svg
                      height="22px"
                      fill="#262626"
                      viewBox="-21 -47 682.66669 682"
                      width="22px"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m552.011719-1.332031h-464.023438c-48.515625 0-87.988281 39.464843-87.988281 87.988281v283.972656c0 48.414063 39.300781 87.816406 87.675781 87.988282v128.863281l185.191407-128.863281h279.144531c48.515625 0 87.988281-39.472657 87.988281-87.988282v-283.972656c0-48.523438-39.472656-87.988281-87.988281-87.988281zm50.488281 371.960937c0 27.835938-22.648438 50.488282-50.488281 50.488282h-290.910157l-135.925781 94.585937v-94.585937h-37.1875c-27.839843 0-50.488281-22.652344-50.488281-50.488282v-283.972656c0-27.84375 22.648438-50.488281 50.488281-50.488281h464.023438c27.839843 0 50.488281 22.644531 50.488281 50.488281zm0 0" />
                      <path d="m171.292969 131.171875h297.414062v37.5h-297.414062zm0 0" />
                      <path d="m171.292969 211.171875h297.414062v37.5h-297.414062zm0 0" />
                      <path d="m171.292969 291.171875h297.414062v37.5h-297.414062zm0 0" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      return <div key={note.noteId}>loading</div>;
    }
  }
}

export default connect(null, { deleteNote, like, unLike })(RenderShare);
