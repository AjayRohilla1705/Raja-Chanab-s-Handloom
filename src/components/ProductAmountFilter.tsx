import { FunctionComponent } from "react";
import "./ProductAmountFilter.css";

export type ProductAmountFilterType = {
  className?: string;
};

const ProductAmountFilter: FunctionComponent<ProductAmountFilterType> = ({
  className = "",
}) => {
  return (
    <section className={`product-amount-filter ${className}`}>
      <div className="product-filter">
        <div className="by-product-container">
          <span>{`By Product `}</span>
          <span className="span1">{`: `}</span>
        </div>
      </div>
      <div className="product-filter-content">
        <div className="product-filter-divider" />
      </div>
      <div className="by-amount-container">
        <span className="by-amount">{`By Amount :  `}</span>
        <span className="span1">{`: `}</span>
      </div>
      <div className="amount-filter">
        <div className="amount-comparison">
          <div className="comparison-options">
            <div className="more-than">{`More than : `}</div>
            <div className="less-than">
              <div className="less-than1">{`Less than : `}</div>
            </div>
          </div>
          <div className="amount-range">
            <div className="amount-range-slider" />
            <div className="amount-range-slider" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductAmountFilter;
