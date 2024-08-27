import { FunctionComponent, useState, useCallback } from "react";
import Desktop8 from "../components/Desktop8";
import PortalPopup from "../components/PortalPopup";
import FilterPopup from "../components/FilterPopup";
import Header from "../components/Header";
import "./Desktop7.css";

const Desktop7: FunctionComponent = () => {
  const [isDesktop7Open, setDesktop7Open] = useState(false);
  const [isFilterPopupOpen, setFilterPopupOpen] = useState(false);

  const openDesktop7 = useCallback(() => {
    setDesktop7Open(true);
  }, []);

  const closeDesktop7 = useCallback(() => {
    setDesktop7Open(false);
  }, []);

  const openFilterPopup = useCallback(() => {
    setFilterPopupOpen(true);
  }, []);

  const closeFilterPopup = useCallback(() => {
    setFilterPopupOpen(false);
  }, []);

  return (
    <>
      <div className="desktop-5">
        <img className="desktop-5-child" alt="" src="/rectangle-30.svg" />
        <img className="desktop-5-item" alt="" src="/rectangle-30.svg" />
        <div className="processing">Processing</div>
        <img
          className="image-17-icon"
          loading="lazy"
          alt=""
          src="/image-17@2x.png"
        />
        <div className="ansh">Ansh</div>
        <div className="billing-table">$134</div>
        <div className="dg">#234dg</div>
        <img
          className="desktop-5-inner"
          alt=""
          src="/rectangle-30.svg"
          onClick={openDesktop7}
        />
        <img
          className="ellipse-icon"
          loading="lazy"
          alt=""
          src="/ellipse-10@2x.png"
        />
        <div className="billing-table1">12/03/24</div>
        <div className="billing-table2">20/03/24</div>
        <div className="billing-table3">$34</div>
        <div className="df">#123df</div>
        <b className="status">Status</b>
        <b className="amount">Amount</b>
        <b className="billing-name">Billing Name</b>
        <b className="order-date">Order Date</b>
        <b className="order-id">Order ID</b>
        <div className="ashwani-kumar">Ashwani Kumar</div>
        <div className="in-progress">In- Progress</div>
        <footer className="header-wrapper">
          <Header />
        </footer>
        <header className="image-22-parent">
          <img
            className="image-22-icon"
            loading="lazy"
            alt=""
            src="/image-22@2x.png"
            onClick={openFilterPopup}
          />
          <div className="order-history-title-wrapper">
            <div className="order-history-title">
              <div className="order-history-title-child" />
              <div className="order-history">ORDER HISTORY</div>
            </div>
          </div>
        </header>
      </div>
      {isDesktop7Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDesktop7}
        >
          <Desktop8 onClose={closeDesktop7} />
        </PortalPopup>
      )}
      {isFilterPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFilterPopup}
        >
          <FilterPopup onClose={closeFilterPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Desktop7;
