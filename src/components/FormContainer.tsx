import { FunctionComponent } from "react";
import "./FormContainer.css";

export type FormContainerType = {
  className?: string;
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  className = "",
}) => {
  return (
    <section className={`form-container ${className}`}>
      <div className="who-am-i-title-container">
        <a className="product-form">{`PRODUCT FORM : `}</a>
      </div>
      <div className="frame-parent21">
        <div className="name-and-description-wrapper">
          <div className="name-and-description">
            <div className="product-name-row-parent">
              <div className="product-name-row">
                <div className="description">
                  <span>{`Product Name `}</span>
                  <span className="span">{`: `}</span>
                </div>
              </div>
              <div className="description-media">
                <div className="product-name-row">
                  <div className="description">Description:</div>
                </div>
                <div className="rectangle-parent10">
                  <div className="frame-child24" />
                  <div className="media">
                    <span className="media1">Media</span>
                    <span>:</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-parent22">
              <div className="shape-one-wrapper">
                <div className="shape-one" />
              </div>
              <div className="shape-two" />
            </div>
          </div>
        </div>
        <div className="rectangle-parent11">
          <div className="frame-child25" />
          <img
            className="upload-cloud-icon"
            loading="lazy"
            alt=""
            src="/upload-cloud.svg"
          />
          <div className="drag-and-upload-wrapper">
            <div className="drag-and-upload">
              <div className="drag-files-here">
                Drag Files here and Click to upload
              </div>
              <div className="about-me-headings">
                <div className="upload-upto-10">Upload upto 10 files</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormContainer;
