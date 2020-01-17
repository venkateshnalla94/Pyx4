import React from 'react';
import { Link, Switch, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import Details from '../Pages/Details';
import Confirm from '../Pages/Confirm';
import ConfirmMail from '../Pages/ConfirmMail';
import Email from '../Pages/Email';
import Phone from '../Pages/Phone';

const Intro = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm-3 stepIndicator"  >
          <div className="bg">
            <Link to="/intro/details" style={{ textDecoration: "none" }}>
              <div className="row stepIndicatorFont" >
                Enter Details
              </div>
            </Link>
            <Link to="/intro/confirm" style={{ textDecoration: "none" }}>
              <div className="row stepIndicatorFont">Confirm Details</div>
            </Link>
            <Link to='/intro/phone' style={{ textDecoration: "none" }}>
              <div className="row stepIndicatorFont">Enter Phone Number</div>
            </Link>
            <Link to='/intro/email' style={{ textDecoration: "none" }}>
              <div className="row stepIndicatorFont">Enter Email Address</div>
            </Link>
            <Link to='/intro/confirmail' style={{ textDecoration: "none" }}>
              <div className="row stepIndicatorFont">Confirm</div>
            </Link>

          </div>
        </div>
        <div className="col-sm-9">
          {/* <Sidebar></Sidebar> */}
          <div className="header"></div>
          <div style={{ height: "50vh" }}>
            <Switch>
              <Route exact path='/intro/details' component={Details} />
              <Route exact path='/intro/confirm' component={Confirm} />
              <Route exact path='/intro/phone' component={Phone} />
              <Route exact path='/intro/email' component={Email} />
              <Route exact path='/intro/confirmail' component={ConfirmMail} />
            </Switch>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Intro;