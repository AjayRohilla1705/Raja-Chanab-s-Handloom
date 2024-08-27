import { FunctionComponent } from "react";
import ProductAmountFilter from "./ProductAmountFilter";
import "./FilterPopup.css";

export type FilterPopupType = {
  className?: string;
  onClose?: () => void;
};

const FilterPopup: FunctionComponent<FilterPopupType> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={`filter-popup ${className}`}>
      <div className="filter-popup-child" />
      <section className="date-filter-wrapper">
        <div className="date-filter">
          <div className="date-filter-content">
            <div className="date-filter-option">
              <div className="date-filter-option-child" />
              <a className="filters">Filters</a>
            </div>
          </div>
          <div className="by-date">{`By Date: `}</div>
        </div>
      </section>
      <div className="filter-popup-item" />
      <div className="filter-popup-inner" />
      <div className="filter-divider" />
      <ProductAmountFilter />
    </div>
  );
};

export default FilterPopup;
