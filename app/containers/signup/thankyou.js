import React, { Component } from 'react';


class Thankyou extends Component {
  render() {
    return (
      <div className="signup_main">
	      <form>
	      <p className="title">Thank you!</p>
	      <div className="progress_bar">
	      <span className="third_step"></span>
	      </div>
	      <div className="check">
	      <div><i className="fa fa-check" aria-hidden="true"></i></div>
	      </div>


	      <div className="goto" onClick={this.props._goToDashBoard}>
	      <span>Go to Dashboard <i className="fa fa-arrow-right" aria-hidden="true"></i></span>
	      </div>
	      </form>
      </div>
    );
  }
}

export default Thankyou;
