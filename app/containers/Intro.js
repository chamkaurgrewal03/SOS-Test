import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadRules } from 'actions/questions'
import { Link } from 'react-router'
import _ from 'lodash'
import Helmet from 'react-helmet'
import SignUp from "./signup/signup.js";
import Details from "./signup/detail.js";
import ThankYou from "./signup/thankyou.js"

class Intro extends Component {

    static fetchData({ store }) {
    return store.dispatch(loadRules())
  }
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.setFormStatus=this.setFormStatus.bind(this);
        this.setDateOfBirth=this.setDateOfBirth.bind(this);
        this.setGender=this.setGender.bind(this);
        this.renderForm=this.renderForm.bind(this);
        this.goToDashBoard=this.goToDashBoard.bind(this);
        this.state={
          signup:{
            gender:"Male",
          },
          dob:{
          },
          status:1
        }
    }

  onChange(e) {
      var newObj = this.state.signup;
        newObj[e.target.name]=e.target.value;
        this.setState({signup:newObj});
  }

  setDateOfBirth(e){
    var newObj = this.state.dob;
    newObj[e.target.name]=e.target.value;
    this.setState({dob:newObj});
  }
  datetotime(template, date){
      date = date.split( template[1] );
      template = template.split( template[1] );
      date = date[ template.indexOf('m') ]
          + "/" + date[ template.indexOf('d') ]
          + "/" + date[ template.indexOf('Y') ];

      return (new Date(date).getTime());
  }
  setGender(gender){
    var newObj = this.state.signup;

      newObj['gender']=gender;
      this.setState({signup:newObj});
  }
  goToDashBoard(){
    var newDate=this.state.dob.date+"-"+this.state.dob.month+"-"+this.state.dob.year;
    var timestamp=this.datetotime("d-m-Y", newDate);
    var request={
      user_data:{
        email:this.state.signup.email,
        password:this.state.signup.password,
        confirm_password:this.state.signup.confirm_password,
        date_of_birth:timestamp,
        gender:this.state.signup.gender,
        how_hear_about_us:this.state.signup.aboutus != undefined ? this.state.signup.aboutus:null,
      }
    }

    console.log(request);
  }


  setFormStatus(status){
    this.setState({status:status});
  }

  componentDidMount() {
    this.props.loadRules();
  }

  renderForm(){
    var form;
    if(this.state.status==1){
         form= <SignUp _onChange={this.onChange}  _parentState={this.state} _setFormStatus={this.setFormStatus} />
     }else if(this.state.status==2){
        form=<Details _onChange={this.onChange}  _parentState={this.state} _setFormStatus={this.setFormStatus} _setDateOfBirth={this.setDateOfBirth} _setGender={this.setGender} />
     }else{
         form=<ThankYou _onChange={this.onChange}  _parentState={this.state} _setFormStatus={this.setFormStatus} _goToDashBoard={this.goToDashBoard} />
     }
     return form;
  }
  render() {
    return (
       <div className="signup">
         {this.renderForm()}
      </div>
    )
  }
}

function mapStateToProps(state) {
    return { rules: state.questions }
}

export { Intro }

export default connect(mapStateToProps,{ loadRules })(Intro)
