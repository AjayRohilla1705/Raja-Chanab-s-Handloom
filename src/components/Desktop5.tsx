import { FunctionComponent } from "react";
import DiscountContainer from "./DiscountContainer";
import MaxQuantityContainer from "./MaxQuantityContainer";
import "./Desktop5.css";

export type Desktop5Type = {
  className?: string;
  onClose?: () => void;
};

const Desktop5: FunctionComponent<Desktop5Type> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={`desktop-8 ${className}`}>
      <main className="page">
        <section className="container-wrapper">
          <header className="container">
            <a className="manage-promotions">{`Manage Promotions : `}</a>
            <div className="promo-details">
              <div className="promo-name-container">
                <a className="name">
                  <span> Name :</span>
                  <b>{` `}</b>
                </a>
              </div>
              <div className="promo-name-border" />
            </div>
          </header>
        </section>
        <DiscountContainer />
        <MaxQuantityContainer />
      </main>
      <div className="add-promotion-container">
        <div className="add-promo-button">
          <div className="add-promo-button-child" />
          <div className="add-promotion-to">{`Add Promotion to Website `}</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop5;
