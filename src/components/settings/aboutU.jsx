import React from "react";

class AboutU extends React.Component {
  state = {
    status: "",
    about: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const info = {
      ...this.props.info,
      ...this.state
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
                <div className="form__row mg-tp" onChange={this.handleChange}>
                  <label className="form__label">Status </label>
                  <div className="form__unit check">
                    <input
                      className="form__radio hidden"
                      value="single"
                      type="radio"
                      id="single"
                      name="status"
                      required
                    />
                    <label htmlFor="single" className="form__label-radio">
                      Single
                    </label>
                  </div>
                  <div className="form__unit check">
                    <input
                      className="form__radio hidden"
                      value="married"
                      type="radio"
                      id="married"
                      name="status"
                    />
                    <label htmlFor="married" className="form__label-radio">
                      married
                    </label>
                  </div>
                  <div className="form__unit check">
                    <input
                      className="form__radio hidden"
                      value="in a relationship"
                      type="radio"
                      id="relationship"
                      name="status"
                    />
                    <label htmlFor="relationship" className="form__label-radio">
                      In a relationship
                    </label>
                  </div>
                </div>

                <div className="from__unit mg-tp">
                  <textarea
                    maxlegnth="200"
                    required
                    className="form__textarea"
                    name="about"
                    value={this.state.about}
                    placeholder="tell us about u.."
                    onChange={this.handleChange}
                  ></textarea>
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
export default AboutU;
