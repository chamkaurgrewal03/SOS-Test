import React, { Component } from 'react';


class Signup extends Component {
  constructor(props){
    super(props);
    this.setFormStatus = this.setFormStatus.bind(this);
  }
  componentDidMount(){
    $("#step1").validate({
            rules: {
                email: {
                    required: true,
                    email:true
                },
                password: {
                    required: true
                },
                confirm_password: {
                    required: true,
                    equalTo:'#password'
                },
            },
            messages: {
                email: {
                    required: "Email is Required"
                },
                password: {
                    required: "Password is Required",

                },
                confirm_password: {
                    required: "Confirm Password is Required",

                }
            }
        });
  }
  setFormStatus(e){
    if($("#step1").valid()){
      this.props._setFormStatus(2);
    }
  }
  render() {
    return (
      <div className="signup_main">
	      <form id="step1">
	      <p className="title">Signup</p>
	      <div className="progress_bar">
	      <span className="first_step"></span>
	      </div>
	      <div className="form_group">
	      	<label>Email</label>
	      	<input name="email" value={this.props._parentState.signup.name} onChange={this.props._onChange} type="text"/>
	      </div>
	      <div className="form_group">
	      	<label>Password</label>
	      	<input name ="password" type="password" minLength="6" id="password" value={this.props._parentState.signup.password} onChange={this.props._onChange} />
	      </div>
	      <div className="form_group">
	      	<label>Confirm Password</label>
	      	<input name="confirm_password" type="password" minLength="6" value={this.props._parentState.signup.confirm_password} onChange={this.props._onChange}/>
	      </div>

	      <div className="next"  onClick={this.setFormStatus}>
	      <span>Next <i className="fa fa-arrow-right" aria-hidden="true"></i></span>
	      </div>
	      </form>
      </div>
    );
  }
}

export default Signup;
