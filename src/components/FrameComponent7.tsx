import { FunctionComponent } from "react";
import "./FrameComponent7.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <section className={`frame-parent29 ${className}`}>
      <div className="rectangle-parent19">
        <div className="products-child" />
        <div className="pricing1">{`Pricing: `}</div>
      </div>
      <div className="frame-wrapper19">
        <div className="frame-parent30">
          <div className="frame-parent31">
            <div className="frame-wrapper20">
              <div className="frame-parent32">
                <div className="base-price-parent">
                  <div className="discount-type-wrapper">
                    <div className="base-price2">{`Base Price : `}</div>
                  </div>
                  <div className="base-price-placeholder" />
                </div>
                <div className="discount-percentage-wrapper">
                  <div className="base-price2">{`Discount Percentage : `}</div>
                </div>
              </div>
            </div>
            <div className="frame-parent33">
              <div className="frame-wrapper21">
                <div className="frame-parent34">
                  <div className="discount-type-wrapper">
                    <div className="base-price2">{`Discount Type : `}</div>
                  </div>
                  <div className="discount-type-placeholder" />
                </div>
              </div>
              <div className="products1">
                <div className="products-child" />
                <div className="products2">{`Products : `}</div>
              </div>
            </div>
          </div>
          <div className="product-list-placeholder" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
