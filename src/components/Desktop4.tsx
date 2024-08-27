import { FunctionComponent } from "react";
import UploadContainer from "./UploadContainer";
import "./Desktop4.css";

export type Desktop4Type = {
  className?: string;
  onClose?: () => void;
};

const Desktop4: FunctionComponent<Desktop4Type> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={`desktop-9 ${className}`}>
      <header className="post-count-parent">
        <div className="post-count">
          <b className="instagram-promotions">{`Instagram Promotions `}</b>
        </div>
        <div className="enter-no-of">{`Enter no.  of Posts : `}</div>
        <div className="post-count-input" />
      </header>
      <section className="upload-container-wrapper">
        <UploadContainer />
      </section>
      <div className="website-integration">
        <div className="website-integration-button">
          <div className="website-integration-button-child" />
          <div className="add-to-website">{`Add  to Website `}</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop4;
