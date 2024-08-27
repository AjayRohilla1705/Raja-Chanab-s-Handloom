import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import "./FrameComponent2.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={`rectangle-parent9 ${className}`}>
      <div className="frame-child22" />
      <div className="raja-s-chanab-16x20-removebg-p-wrapper">
        <img
          className="raja-s-chanab-16x20-removebg-p-icon"
          loading="lazy"
          alt=""
          src="/raja-s-chanab-16x20removebgpreview-4@2x.png"
        />
      </div>
      <div className="overview" />
      <div className="frame-parent18">
        <div className="frame-parent19">
          <div className="frame-wrapper12">
            <div className="frame-parent20">
              <div className="sales-frame">
                <img
                  className="sales-icon1"
                  loading="lazy"
                  alt=""
                  src="/sales.svg"
                />
              </div>
              <b className="rajas-chanab">{`Raja’s Chanab `}</b>
            </div>
          </div>
          <div className="vector-parent7">
            <img className="frame-child23" alt="" />
            <img
              className="overview-icon2"
              loading="lazy"
              alt=""
              src="/overview-1.svg"
            />
            <div className="dashboard-wrapper">
              <div className="dashboard2">Dashboard</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper13">
          <FrameComponent1 />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
