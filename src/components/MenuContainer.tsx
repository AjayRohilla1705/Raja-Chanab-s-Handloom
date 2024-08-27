import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import "./MenuContainer.css";

export type MenuContainerType = {
  className?: string;
};

const MenuContainer: FunctionComponent<MenuContainerType> = ({
  className = "",
}) => {
  return (
    <div className={`menu-container ${className}`}>
      <div className="rectangle-parent16">
        <div className="frame-child30" />
        <div className="overview4" />
        <div className="menu-item-container">
          <div className="menu-item3">
            <img
              className="raja-s-chanab-16x20-removebg-p-icon2"
              loading="lazy"
              alt=""
              src="/raja-s-chanab-16x20removebgpreview-4@2x.png"
            />
            <div className="sales-container2">
              <div className="sales-wrapper1">
                <img
                  className="sales-icon3"
                  loading="lazy"
                  alt=""
                  src="/sales.svg"
                />
              </div>
              <div className="rajas-chanab-parent">
                <b className="rajas-chanab2">{`Raja’s Chanab `}</b>
                <div className="dashboard-container-wrapper">
                  <div className="dashboard-container">
                    <img
                      className="overview-icon6"
                      loading="lazy"
                      alt=""
                      src="/overview-1.svg"
                    />
                    <div className="dashboard-frame">
                      <div className="dashboard4">Dashboard</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent1
          propFlex="unset"
          propAlignSelf="stretch"
          propPadding="0rem 0rem 0rem 1.312rem"
          propTextDecoration="none"
        />
      </div>
      <div className="overview-pane">
        <img
          className="overview-icon7"
          loading="lazy"
          alt=""
          src="/overview-2.svg"
        />
        <img
          className="overview-icon8"
          loading="lazy"
          alt=""
          src="/overview.svg"
        />
        <div className="customer-container">
          <div className="customer-icon1" />
          <div className="costumer2">Customers</div>
        </div>
      </div>
      <div className="content-separator" />
    </div>
  );
};

export default MenuContainer;
