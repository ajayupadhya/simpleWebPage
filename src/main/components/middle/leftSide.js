import React from "react";
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
const LeftSide = () => {
  return (
    <div className="leftside">
      <p style={{ fontSize: 16, color: "#ed7d31", marginTop: 30 }}>
        Connecting the Disconnected{" "}
      </p>
      <div style={{ marginTop: 10 }}>
        <h3 style={{ fontSize: 50, letterSpacing: .3, fontWeight: "700" }}>
          <span style={{ color: "#ed7d31" }}>Vyrious</span> brings unmanned
          robots <span style={{ color: "#ed7d31" }}>together</span>, wherever
        </h3>
      </div>
      <p style={{ marginTop: 20, fontSize: 22 , fontWeight:"300" }}>
        With all of the operations, commanding and maintenance tools in one
        place, unmanned vehicles will stay connected and productive no matter
        where you’re Delivering
      </p>
      <div className="middlebtn">
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
      <p style={{ marginTop: 15 }}>
        Need to order a delivery?{" "}
        <Link href="#" color="blue">
          {" "}
          Gert Started
        </Link>{" "}
      </p>
    </div>
  );
};

export default LeftSide;
