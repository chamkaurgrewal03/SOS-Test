import React, { Component } from 'react';
import browserHistory from 'react-router';

class Details extends Component {
  constructor(props){
    super(props);
    this.setFormStatus = this.setFormStatus.bind(this);

  }

  componentDidMount(){
    $(".option").click(function(event){
      console.log('test');
        $(this).addClass("active").siblings().removeClass("active");
    });
  $("#step2" ).validate({
    errorLabelContainer: "#errorPlacement",
    rules: {
    },
    messages: {
      date: {
          required: "Enter date of birth"
      },
      month: {
          required: "Enter date of birth"
      },
      year: {
          required: "Enter date of birth"
      },
    },
    groups: {
        inputGroup: "date month year",
    },
    });
    $(".d_o_b input").keyup(function () {
      if (this.value.length == this.maxLength) {
        $(this).next('input').focus();
      }
    });
  }

  setFormStatus(e){
    if($("#step2" ).valid()){
      this.props._setFormStatus(3);
    }
  }

  setGender(gender){
    console.log(gender);
    this.props._setGender(gender);
  }
  goBack(){
    this.props._setFormStatus(1);

  }

  render() {
    console.log('props value',this.props);
    return (
      <div className="signup_main">
	      <form id="step2">
	      <p className="title">Signup</p>
	      <div className="progress_bar">
	      <span className="second_step"></span>
	      </div>
	      <div className="form_group d_o_b">
	      	<label>Date of Birth</label>
	      	<input type="text" name="date" className="date dob-group" maxLength="2" placeholder="DD" value={this.props._parentState.dob.date} onChange={this.props._setDateOfBirth} required/>
	      	<input type="text" name="month" className="month dob-group" maxLength="2" placeholder="MM" value={this.props._parentState.dob.month} onChange={this.props._setDateOfBirth} required/>
	      	<input type="text" name="year" className="year dob-group" maxLength="4" placeholder="YYYY" value={this.props._parentState.dob.year} onChange={this.props._setDateOfBirth} required/>

	      </div>
	      <div className="form_group gender">
	      	<label>Gender</label>
        	<div className="option first active" onClick={this.setGender.bind(this,"Male")}>Male</div>
    			<div className="option second" onClick={this.setGender.bind(this,"Female")}>Female</div>
    			<div className="option third"  onClick={this.setGender.bind(this,"Unspecified")} >Unspecified</div>
	      </div>
	      <div className="form_group select">
	      	<label>Where Did you here about us?</label>
	      	<select name="aboutus" value={this.props._parentState.signup.aboutus}
onChange={this.props._onChange}>
	      		<option selected="selected" value="">Please Select</option>
	      		<option value="option1">option1</option>
	      		<option value="option2">option2</option>
	      		<option value="option3">option3</option>
	      	</select>
	      </div>

	      <div className="next" onClick={this.setFormStatus}>
	      <span className="back disable" onClick={this.goBack.bind(this)}>Back</span>

	      <span>Next <i className="fa fa-arrow-right" aria-hidden="true"></i></span>
	      </div>
	      </form>
      </div>
    );
  }
}

export default Details;
