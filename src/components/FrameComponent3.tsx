import { FunctionComponent } from "react";
import "./FrameComponent3.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="rectangle-parent12">
        <div className="frame-child26" />
        <div className="pricing">{`Pricing: `}</div>
      </div>
      <div className="frame-wrapper14">
        <div className="base-price-discount-parent">
          <div className="base-price-discount">
            <div className="tools-list">
              <div className="base-price-field">
                <div className="base-price-input">
                  <div className="base-price-value">
                    <div className="base-price-label-container">
                      <div className="base-price">{`Base Price : `}</div>
                    </div>
                    <div className="base-price-shape" />
                  </div>
                  <div className="discount-row">
                    <div className="base-price">{`Discount Percentage : `}</div>
                  </div>
                </div>
                <div className="canva-items">
                  <div className="discount-type-field">
                    <div className="base-price-label-container">
                      <div className="base-price">{`Discount Type : `}</div>
                    </div>
                    <div className="discount-type-shape" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent13">
              <div className="frame-child26" />
              <div className="inventory">{`Inventory : `}</div>
            </div>
          </div>
          <div className="pricing-shape" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
