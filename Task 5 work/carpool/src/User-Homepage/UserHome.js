import React from "react";
import ServiceMenu from "./UserServiceOptions";
import Services from "./Services";
import ProfileOptions from "./profile-options";
import '../App.css';

class UserHome extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isForBooking : true,
      isHome: true
    }
  }
  showOtherService(val=null){
    this.setState((prevState) => {
      return val!=null
        ?{isForBooking : val,isHome : false}
        :{isForBooking : !prevState.isForBooking};
    });    
  }
  user = {
    firstName: 'John',
    lastName: 'Wills'
  }
  render(){
    return (
      <div>
        <ProfileOptions userName={this.user.firstName+''+this.user.lastName}/>
      {
        this.state.isHome
        ?
        <ServiceMenu userData={this.user} 
          showOffering={() => this.showOtherService(false)} 
          showBooking={() => this.showOtherService(true)}/>
        : <Services isBooking={this.state.isForBooking} toggleService={() => this.showOtherService(null)}/>
      }
      </div>
    );
  }
}

export default UserHome;