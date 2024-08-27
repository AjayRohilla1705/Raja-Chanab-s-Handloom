import { FunctionComponent } from "react";
import "./FrameComponent5.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={`frame-parent23 ${className}`}>
      <div className="profile-details-parent">
        <a className="profile-details1">Profile Details</a>
        <div className="vector-wrapper">
          <img className="line-icon" loading="lazy" alt="" src="/line-77.svg" />
        </div>
        <img className="frame-icon" alt="" src="/frame-62.svg" />
      </div>
      <div className="name-container-wrapper">
        <div className="name-container1">
          <div className="name-field">
            <b className="number">Name</b>
          </div>
          <div className="user-name">
            <b className="ashwani-kimar">Ashwani Kimar</b>
          </div>
        </div>
      </div>
      <div className="name-container-wrapper">
        <div className="contact-info">
          <div className="contact-fields">
            <div className="contact-labels">
              <b className="number">Email</b>
            </div>
            <div className="user-name">
              <b className="demogmailcom">demo@gmail.com</b>
            </div>
          </div>
          <div className="contact-fields">
            <div className="number-wrapper">
              <b className="number">Number</b>
            </div>
            <div className="user-name">
              <b className="b1">+91 123456789</b>
            </div>
          </div>
          <div className="contact-fields">
            <div className="address-wrapper">
              <b className="number">Address</b>
            </div>
            <div className="c-sector-18-new-delhi-110-wrapper">
              <b className="c-sector-18">
                20-C, Sector -18, New Delhi , 110042
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
