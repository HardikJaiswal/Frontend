import FormHeader from "./FormHeader";
import RideMatches from "./RideMatches";
import RideMatchSecondForm from "./RideMatchSecondForm";

function Services(props){
  let timings = [
    {start: 5, end: 9, beforeNoon: true},
    {start: 9, end: 12, beforeNoon: true},
    {start: 12, end: 3, beforeNoon: false},
    {start: 3, end: 6, beforeNoon: false},
    {start: 6, end: 9, beforeNoon: false}
  ]
  return (
    <div className="ride-form">
      <div className="container form">
        <FormHeader isBooking={props.isBooking} toggleService={props.toggleService} /><br/><br/>
        <form>
          <div className="inputs">
            <label>From</label><br/>
            <input type="text" placeholder="Start Point" required/>
          </div>
          <div className="inputs">
            <label>To</label><br/>
            <input type="text" placeholder="End Point" required/>
          </div>
          <div className="inputs">
            <label>Date</label><br/> 
            <input type="date" placeholder="xx/mm/yyyy" required/><br/>
          </div>
          <label>Time</label>
          <div className="time-selection">
            {timings.map((item,pos) =>{
              const classArr = ['times'];
              if(pos == 0){
                classArr.push('time-selected');
              }
              return (
                <button className={classArr.join(' ')} key={pos}>
                  {item.start}{item.beforeNoon?'am':'pm'} - {item.end}{item.beforeNoon?item.end==12?'pm':'am':item.end==12?'am':'pm'}
                </button>
              );
            })}
          </div><br/><br/>
          {
            props.isBooking ?
            <input type="submit" value="Submit" className="bg-orange"/> :
            <b className="next">Next &#187;</b>
          }
        </form>
      </div>
      {props.isBooking ?
      <RideMatches /> : 
      <RideMatchSecondForm />}
    </div>
  );
}

export default Services;