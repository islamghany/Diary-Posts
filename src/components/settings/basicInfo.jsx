import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class BasicInfo extends React.Component {
  state = {
    startDate: new Date(),
    nickname: "",
    birthday: "",
    gender: "",
    country: ""
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleChange1 = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    //var utc e.preventDefault();= new Date().toJSON().slice(0,10).replace(/-/g,'/');
    e.preventDefault();
    let utc = this.state.startDate
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");

    const info = {
      ...this.props.info,
      ...this.state,
      date: utc
    };
    this.props.updateProfile(this.props.info.uid, info);
  };
  render() {
    if (this.props.info) {
      return (
        <div className="form__wrapper">
          <div className="form">
            <div className="from__container">
              <div className="form__header">Basic Info</div>
              <form onSubmit={this.handleSubmit}>
                <div className="from__unit">
                  <input
                    type="text"
                    className="form__input"
                    name="nickname"
                    value={this.state.nickname}
                    onChange={this.handleChange1}
                    placeholder="nickname.."
                  />
                </div>
                <div className="form__row mg-tp" onChange={this.handleChange1}>
                  <label className="form__label">Gender: </label>
                  <div className="form__unit check">
                    <input
                      className="form__radio hidden"
                      required
                      value="man"
                      type="radio"
                      id="yes"
                      name="gender"
                    />
                    <label htmlFor="yes" className="form__label-radio">
                      Man
                    </label>
                  </div>
                  <div className="form__unit check">
                    <input
                      className="form__radio hidden"
                      value="women"
                      type="radio"
                      id="no"
                      name="gender"
                    />
                    <label htmlFor="no" className="form__label-radio">
                      Woman
                    </label>
                  </div>
                </div>
                <div className="form__unit mg-tp">
                  <label className="form__label mg-right">Birthday: </label>
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    className="form__input"
                    placeholderText="Choose date"
                    required
                  />
                </div>
                <div className="from__unit ">
                  <input
                    type="text"
                    className="form__input"
                    name="country"
                    value={this.state.country}
                    onChange={this.handleChange1}
                    placeholder="where are you from ?"
                    required
                  />
                </div>
                <button className="btn btn--contained-link circle mg-none mg-tp">
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}
export default BasicInfo;
