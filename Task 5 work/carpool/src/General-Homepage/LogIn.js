import React from "react";

class LogIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      values : {
        Email : "",
        Pwd : ""
      }
    }
    this.val = this.state.values;
  }
  getValues(event){
    let field = event.target.name;
    this.val[field] = event.target.value;
  }

  showValues(){
    console.log(this.val);
  }

  render(){
    return (
      <div className="sign-in">
        <h1>Log In</h1><br />
        <form>
          <div className="input-area">
            <input type="email" className="input-text" name="Email" onChange={this.getValues.bind(this)} required/>
            <span className="floating-text">Enter Email Id</span>
          </div>
          <br />
          <div className="input-area">
            <input type="password" className="input-text" name="Pwd" required/>
            <span className="floating-text">Enter Password</span>
          </div>
          <br /><br />
          <input className="submit-btn bg-orange" type="submit" value="Submit" onClick={this.showValues()}/>
          <br /><br />
        </form>
        <span>Not a member yet ?&nbsp;
          <b style={{cursor: "pointer"}} onClick={() => this.props.onSignupClick()}>
            SIGN UP
          </b>
        </span>
      </div>
    );
  }
}

export default LogIn;