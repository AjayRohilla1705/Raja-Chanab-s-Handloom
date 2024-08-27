import { FunctionComponent, useState, useCallback } from "react";
import Desktop5 from "./Desktop5";
import PortalPopup from "./PortalPopup";
import Desktop4 from "./Desktop4";
import Desktop6 from "./Desktop6";
import { useNavigate } from "react-router-dom";
import "./CostumerMenu.css";

export type CostumerMenuType = {
  className?: string;
};

const CostumerMenu: FunctionComponent<CostumerMenuType> = ({
  className = "",
}) => {
  const [isDesktop8Open, setDesktop8Open] = useState(false);
  const [isDesktop9Open, setDesktop9Open] = useState(false);
  const [isDesktop10Open, setDesktop10Open] = useState(false);
  const navigate = useNavigate();

  const openDesktop8 = useCallback(() => {
    setDesktop8Open(true);
  }, []);

  const closeDesktop8 = useCallback(() => {
    setDesktop8Open(false);
  }, []);

  const openDesktop9 = useCallback(() => {
    setDesktop9Open(true);
  }, []);

  const closeDesktop9 = useCallback(() => {
    setDesktop9Open(false);
  }, []);

  const openDesktop10 = useCallback(() => {
    setDesktop10Open(true);
  }, []);

  const closeDesktop10 = useCallback(() => {
    setDesktop10Open(false);
  }, []);

  const onProductsContentContainerClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);

  const onLogoutContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={`costumer-menu ${className}`}>
        <div className="left-sidebar">
          <div className="left-sidebar-child" />
          <div className="sidebar-content">
            <div className="logo-container">
              <div className="logo-background" />
            </div>
            <div className="profile-container">
              <img
                className="raja-s-chanab-16x20-removebg-p-icon1"
                loading="lazy"
                alt=""
                src="/raja-s-chanab-16x20removebgpreview-4@2x.png"
              />
              <div className="profile-info">
                <div className="profile-details">
                  <div className="sales-container1">
                    <img
                      className="sales-icon2"
                      loading="lazy"
                      alt=""
                      src="/sales1.svg"
                    />
                  </div>
                  <b className="rajas-chanab1">{`Raja’s Chanab `}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="navigation-container">
            <div className="navigation-content">
              {/* <img className="navigation-content-child" loading="lazy" alt="" /> */}
              <div className="navigation-links">
                <div className="navigation-items" onClick={openDesktop8}>
                  <img
                    className="overview-icon3"
                    loading="lazy"
                    alt=""
                    src="/overview-2.svg"
                  />
                  <div className="promotions-wrapper">
                    <div className="promotions">Promotions</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="social-container">
              <div className="social-content">
                <img
                  className="instagram-icon"
                  loading="lazy"
                  alt=""
                  src="/instagram.svg"
                />
                <div className="instagram-label">
                  <div className="instagram" onClick={openDesktop9}>
                    Instagram
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products-container1">
            <div
              className="products-content"
              onClick={onProductsContentContainerClick}
            >
              <div className="products-content-child" />
              <div className="manage-products">{`Manage Products `}</div>
            </div>
          </div>
          <div className="settings-container1">
            <div className="settings-content">
              <div className="menu-item-wrapper">
                <div className="menu-item" onClick={openDesktop10}>
                  <div className="overview1">
                    <div className="overview2">
                      <div className="overview3" />
                    </div>
                  </div>
                  <div className="settings-submenu">
                    <div className="settings-group">
                      <img
                        className="settings-icon2"
                        alt=""
                        src="/settings.svg"
                      />
                      <img
                        className="settings-icon2"
                        alt=""
                        src="/settings.svg"
                      />
                    </div>
                    <img
                      className="settings-icon2"
                      loading="lazy"
                      alt=""
                      src="/settings.svg"
                    />
                  </div>
                  <div className="settings-label">
                    <a className="settings2">Settings</a>
                    <div className="settings-parent1">
                      <a className="settings3">Settings</a>
                      <a className="settings4">Settings</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="logout-container"
                onClick={onLogoutContainerClick}
              >
                <div className="logout-content">
                  <div className="log-out2">{`LOG OUT `}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item1">
          <div className="overview-icon4">
            <img className="vector-icon2" alt="" src="/vector.svg" />
            <div className="customers-inner" />
          </div>
          <img className="overview-icon4" alt="" src="/overview.svg" />
          <div className="menu-item-item" />
          <img
            className="upward-trend-icon-sales"
            loading="lazy"
            alt=""
            src="/Dashboard.svg"
          />
          <div className="costumer1">Dashboard</div>
        </div>
        <div className="menu-item2">
          <div className="overview-icon4">
            <img className="vector-icon2" alt="" src="/vector.svg" />
            <div className="customers-inner" />
          </div>
          <img className="overview-icon4" alt="" src="/overview.svg" />
          <div className="menu-item-item" />
          <img
            className="upward-trend-icon-sales"
            loading="lazy"
            alt=""
            src="/customers.svg"
          />
          <div className="costumer1">Sales</div>
        </div>
      </div>
      {isDesktop8Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDesktop8}
        >
          <Desktop5 onClose={closeDesktop8} />
        </PortalPopup>
      )}
      {isDesktop9Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDesktop9}
        >
          <Desktop4 onClose={closeDesktop9} />
        </PortalPopup>
      )}
      {isDesktop10Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top left"
          onOutsideClick={closeDesktop10}
        >
          <Desktop6 onClose={closeDesktop10} />
        </PortalPopup>
      )}
    </>
  );
};

export default CostumerMenu;
