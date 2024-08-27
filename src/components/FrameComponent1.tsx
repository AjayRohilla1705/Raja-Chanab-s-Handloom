import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propTextDecoration?: CSSProperties["textDecoration"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  propFlex,
  propAlignSelf,
  propPadding,
  propTextDecoration,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propFlex, propAlignSelf, propPadding]);

  const settingsStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={`frame-parent17 ${className}`} style={frameDivStyle}>
      <div className="frame-wrapper10">
        <div className="settings-parent">
          <img
            className="settings-icon1"
            loading="lazy"
            alt=""
            src="/settings.svg"
          />
          <div className="settings-container">
            <div className="settings1" style={settingsStyle}>
              Settings
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper11">
        <div className="log-out-wrapper">
          <div className="log-out1">{`LOG OUT `}</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
