import { FunctionComponent } from "react";
import FrameComponent5 from "./FrameComponent5";
import "./Desktop8.css";

export type Desktop8Type = {
  className?: string;
  onClose?: () => void;
};

const Desktop8: FunctionComponent<Desktop8Type> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={`desktop-7 ${className}`}>
      <form className="frame-form">
        <FrameComponent5 />
        <div className="chat-button-wrapper">
          <div className="chat-button">
            <div className="chat-button-child" />
            <b className="chat-now">CHAT NOW</b>
          </div>
        </div>
      </form>
      <div className="order-container-wrapper">
        <div className="order-container">
          <div className="order-header">
            <a className="order-details">Order Details</a>
            <img className="order-header-child" alt="" src="/line-77.svg" />
          </div>
          <div className="order-info">
            <div className="order-summary">
              <div className="product-name">
                Product Name : Bomabay Deying Designer Bedsheet
              </div>
              <div className="product-image">
                <div className="image-container1">
                  <img
                    className="image-placeholder-icon"
                    loading="lazy"
                    alt=""
                    src="/rectangle-135@2x.png"
                  />
                  <img
                    className="image-placeholder-icon"
                    loading="lazy"
                    alt=""
                    src="/rectangle-135@2x.png"
                  />
                </div>
              </div>
              <div className="order-items">
                <div className="product-id">Product ID : #1SDF34</div>
              </div>
              <div className="order-items">
                <div className="order-id1">Order ID : #ADS56BH</div>
              </div>
              <div className="order-items2">
                <div className="amount-34">Amount : $34</div>
              </div>
              <div className="delivery-payment">
                <div className="delivery-info">
                  <div className="delivery-details">
                    <div className="expected-delivery-date">
                      Expected Delivery Date: 17/03/24
                    </div>
                    <div className="product-name">{`Payment Method :  Online `}</div>
                  </div>
                  <div className="payment-status">
                    <div className="paid-label">
                      <div className="paid-label-child" />
                      <div className="paid">Paid</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop8;
