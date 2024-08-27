import { FunctionComponent } from "react";
import "./MaxQuantityContainer.css";

export type MaxQuantityContainerType = {
  className?: string;
};

const MaxQuantityContainer: FunctionComponent<MaxQuantityContainerType> = ({
  className = "",
}) => {
  return (
    <section className={`max-quantity-container ${className}`}>
      <div className="max-quantity-label">
        <div className="max-quantity-description-wrapper">
          <div className="max-quantity-description">
            <div className="maximum-quantity-discount-container">
              <span className="maximum-quantity-discount">
                {" "}
                Maximum Quantity Discount Is Applied To :
              </span>
              <b>{` `}</b>
            </div>
            <div className="maximum-quantity-discount-container1">
              <span className="maximum-quantity-discount">
                {" "}
                Maximum Quantity Discount Is Applied To :
              </span>
              <b>{` `}</b>
            </div>
          </div>
        </div>
        <div className="max-quantity-border" />
      </div>
      <div className="product-quantity-container">
        <div className="product-quantity-input">
          <div className="product-quantity-fields">
            <div className="maximum-product-quantity-container">
              <span className="maximum-quantity-discount">
                {" "}
                Maximum Product Quantity (X) :
              </span>
              <b>{` `}</b>
            </div>
            <div className="product-quantity-border" />
          </div>
          <div className="promotion-banner-container">
            <span className="maximum-quantity-discount">
              {" "}
              Promotion Banner :
            </span>
            <b>{` `}</b>
          </div>
        </div>
        <div className="upload-container">
          <div className="uploader">
            <div className="uploader-child" />
            <img
              className="upload-cloud-icon1"
              loading="lazy"
              alt=""
              src="/upload-cloud1.svg"
            />
            <div className="upload-instructions">
              <div className="drag-files-here-and-click-to-u-parent">
                <div className="drag-files-here1">
                  Drag Files here and Click to upload
                </div>
                <div className="upload-3-files">Upload 3 files only</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaxQuantityContainer;
