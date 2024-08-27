import { FunctionComponent } from "react";
import "./FrameComponent6.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <section className={`frame-parent24 ${className}`}>
      <div className="frame-wrapper15">
        <div className="frame-parent25">
          <div className="category-form-wrapper">
            <b className="category-form">{`Category Form : `}</b>
          </div>
          <div className="frame-parent26">
            <div className="category-name-wrapper">
              <div className="category-name-container">
                <span>{`Category Name `}</span>
                <span className="span3">{`: `}</span>
              </div>
            </div>
            <div className="image-placeholder" />
          </div>
        </div>
      </div>
      <div className="frame-parent27">
        <div className="frame-wrapper16">
          <div className="frame-parent28">
            <div className="frame-wrapper17">
              <div className="description-input-parent">
                <div className="description-input">
                  <div className="category-name-container">Description:</div>
                </div>
                <div className="description-placeholder" />
              </div>
            </div>
            <div className="rectangle-parent17">
              <div className="frame-child31" />
              <div className="media2">
                <span className="media3">Media</span>
                <span>:</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent18">
          <div className="frame-child32" />
          <img
            className="upload-cloud-icon3"
            loading="lazy"
            alt=""
            src="/upload-cloud.svg"
          />
          <div className="frame-wrapper18">
            <div className="drag-files-here-and-click-to-u-container">
              <div className="drag-files-here3">
                Drag Files here and Click to upload
              </div>
              <div className="upload-upto-10-files-wrapper">
                <div className="upload-upto-101">Upload upto 10 files</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
