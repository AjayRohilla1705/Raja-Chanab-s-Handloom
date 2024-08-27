import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop6.css";

export type Desktop6Type = {
  className?: string;
  onClose?: () => void;
};

const Desktop6: FunctionComponent<Desktop6Type> = ({
  className = "",
  onClose,
}) => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`desktop-10 ${className}`}>
      <div className="desktop-10-child" />
      <div className="settings-wrapper">
        <a className="settings">Settings</a>
      </div>
      <div className="navigation">
        <div className="navigation-child" />
        <img className="settings-icon" alt="" src="/settings1.svg" />
        <div className="appearance">
          <a className="general">General</a>
        </div>
      </div>
      <div className="navigation1">
        <div className="navigation-item" />
        <div className="page-apperance">Page apperance</div>
      </div>
      <div className="navigation2">
        <div className="navigation-child" />
        <div className="page-settings">Page Settings</div>
      </div>
      <div className="navigation3">
        <div className="navigation-child" />
        <div className="edit-section">Edit Section</div>
      </div>
      <div className="navigation4">
        <div className="navigation-child" />
        <div className="change-password">Change Password</div>
      </div>
      <div className="navigation5">
        <div className="navigation-child" />
        <div className="profile">Profile</div>
      </div>
      <div className="navigation6">
        <div className="navigation-child4" onClick={onRectangleClick} />
        <div className="log-out">Log Out</div>
      </div>
    </div>
  );
};

export default Desktop6;
