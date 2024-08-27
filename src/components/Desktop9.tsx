import { FunctionComponent } from "react";
import FrameComponent6 from "./FrameComponent6";
import FrameComponent7 from "./FrameComponent7";
import "./Desktop9.css";

export type Desktop9Type = {
  className?: string;
  onClose?: () => void;
};

const Desktop9: FunctionComponent<Desktop9Type> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={`desktop-6 ${className}`}>
      <FrameComponent6 />
      <div className="desktop-6-child" />
      <FrameComponent7 />
      <section className="desktop-6-inner">
        <div className="frame-parent11">
          <div className="rectangle-parent7">
            <div className="frame-child14" />
            <div className="click-here-to">Click Here To Add your Product</div>
          </div>
          <div className="frame-wrapper6">
            <div className="rectangle-parent8">
              <div className="frame-child15" />
              <div className="add">{`Add `}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop9;
