import React from "react";
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
const RightSide = () => {
  return (
    <div className="rightside">
      <div className="upper">
        <div className="pic2">
          <div className="smaalbtn2">
            <p>Water</p>
          </div>
        </div>
        <div className="pic1">
          <div className="smaalbtn1">
            <p>Air</p>
          </div>
        </div>
      </div>
      <div className="pic3"></div>
      <div className="last">
        <div className="pic4">
          <div className="smaalbtn4">
            <p>land</p>
          </div>
        </div>
        <div className="pic5">
          <div className="smaalbtn5">
            <p>Indoor</p>
          </div>
        </div>
      </div>
      <div className="middlebtnri">
        <Button
          variant="contained"
          disableElevation
          style={{ color: "white", backgroundColor: "#ed7d31" , letterSpacing:1 }}
        >
          Try Vyorius
        </Button>
        <Button variant="outlined" disableElevation color="secondary" style={{ marginLeft: 10 , color:'#ed7d31' , borderWidth:1 , borderColor:'#ed7d31'}}>
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default RightSide;
