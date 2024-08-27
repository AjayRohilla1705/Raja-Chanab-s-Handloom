import { FunctionComponent } from "react";
import "./DiscountContainer.css";

export type DiscountContainerType = {
  className?: string;
};

const DiscountContainer: FunctionComponent<DiscountContainerType> = ({
  className = "",
}) => {
  return (
    <section className={`discount-container ${className}`}>
      <div className="discount-type-container">
        <div className="discount-type-input1">
          <div className="discount-type-label">
            <div className="discount-type-container1">
              <span> Discount Type :</span>
              <b>{` `}</b>
            </div>
          </div>
          <div className="discount-type-border" />
        </div>
      </div>
      <div className="discount-value-container">
        <div className="discount-value-input">
          <div className="discount-type-container1">
            <span> Discount Value :</span>
            <b>{` `}</b>
          </div>
        </div>
        <div className="discount-value-border" />
      </div>
    </section>
  );
};

export default DiscountContainer;
