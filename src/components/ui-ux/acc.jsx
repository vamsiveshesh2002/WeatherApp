import React from "react";
import "./style.css";

export const MyAccount = () => {
  return (
    <div className="my-account">
      <div className="div">
        <div className="group">
          <div className="navbar">
            <div className="text-wrapper">Home</div>
            <div className="text-wrapper-2">Shop</div>
            <div className="text-wrapper-3">About</div>
            <div className="text-wrapper-4">Contact</div>
          </div>
          <img className="img" alt="Group" src="group-1.png" />
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-5">My Account</div>
                <img className="meubel-house-logos" alt="Meubel house logos" src="meubel-house-logos-05.png" />
              </div>
            </div>
            <div className="group-2">
              <div className="text-wrapper">Home</div>
              <div className="text-wrapper-6">My account</div>
              <img className="dashicons-arrow-down" alt="Dashicons arrow down" src="dashicons-arrow-down-alt2.svg" />
            </div>
          </div>
        </div>
        <div className="group-3">
          <div className="div-wrapper">
            <div className="overlap-2">
              <div className="rectangle" />
              <div className="group-4">
                <div className="overlap-group-2">
                  <div className="text-wrapper-7">Log In</div>
                </div>
              </div>
              <div className="text-wrapper-8">Log In</div>
              <div className="group-5">
                <div className="text-wrapper">Username or email address</div>
                <div className="rectangle-2" />
              </div>
              <div className="group-6">
                <div className="text-wrapper">Password</div>
                <div className="rectangle-2" />
              </div>
              <div className="text-wrapper-9">Remember me</div>
              <div className="text-wrapper-10">Lost Your Password?</div>
            </div>
          </div>
          <div className="group-7">
            <div className="overlap-2">
              <div className="group-8">
                <div className="overlap-group-2">
                  <div className="text-wrapper-11">Register</div>
                </div>
              </div>
              <div className="text-wrapper-12">Register</div>
              <div className="group-9">
                <div className="text-wrapper">Email address</div>
                <div className="rectangle-2" />
              </div>
              <p className="p">A link to set a new password will be sent to your email address.</p>
              <p className="your-personal-data">
                <span className="span">
                  Your personal data will be used to support your experience throughout this website, to manage access
                  to your account, and for other purposes described in our{" "}
                </span>
                <span className="text-wrapper-13">privacy policy.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="group-10">
          <div className="group-11">
            <div className="text-wrapper-14">Free Delivery</div>
            <p className="text-wrapper-15">For all oders over $50, consectetur adipim scing elit.</p>
          </div>
          <div className="group-12">
            <div className="text-wrapper-14">90 Days Return</div>
            <p className="text-wrapper-15">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div className="group-13">
            <div className="text-wrapper-14">Secure Payment</div>
            <p className="text-wrapper-15">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
        <div className="group-wrapper">
          <div className="group-14">
            <div className="group-15">
              <p className="element-university-drive">
                400 University Drive Suite 200 Coral Gables, <br />
                FL 33134 USA
              </p>
              <div className="group-16">
                <div className="group-17">
                  <div className="group-18">
                    <div className="group-19">
                      <div className="text-wrapper">Home</div>
                      <div className="text-wrapper-16">Shop</div>
                      <div className="text-wrapper-17">About</div>
                      <div className="text-wrapper-18">Contact</div>
                    </div>
                    <div className="text-wrapper-19">Links</div>
                  </div>
                  <div className="group-20">
                    <div className="text-wrapper-19">Help</div>
                    <div className="group-21">
                      <div className="text-wrapper">Payment Options</div>
                      <div className="text-wrapper-16">Returns</div>
                      <div className="text-wrapper-20">Privacy Policies</div>
                    </div>
                  </div>
                </div>
                <div className="group-22">
                  <div className="text-wrapper-19">Newsletter</div>
                  <div className="group-23">
                    <div className="text-wrapper-21">Enter Your Email Address</div>
                    <img className="line" alt="Line" src="line-2.svg" />
                    <div className="text-wrapper-22">SUBSCRIBE</div>
                    <img className="line-2" alt="Line" src="line-3.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group-24">
              <img className="line-3" alt="Line" src="line-4.svg" />
              <p className="text-wrapper-23">2022 Meubel House. All rights reverved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
