import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./FrameComponent4.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={`barcode-container-wrapper ${className}`}>
      <div className="barcode-container">
        <div className="barcode-row">
          <div className="barcode">{`BarCode : `}</div>
          <div className="illustrator-logo">
            <div className="quantity-row">
              <div className="rectangle-parent14">
                <div className="frame-child28" />
                <div className="quantity">{`Quantity : `}</div>
              </div>
              <div className="about-me-content-wrapper">
                <Form className="about-me-content">
                  <Form.Control type="text" />
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="s-k-u-row-parent">
          <div className="s-k-u-row">
            <div className="s-k-u-field">
              <div className="sku-wrapper">
                <div className="sku">{`SKU  : `}</div>
              </div>
              <div className="s-k-u-shape" />
            </div>
          </div>
          <div className="rectangle-parent15">
            <div className="frame-child29" />
            <div className="in-warehouse">In warehouse</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
