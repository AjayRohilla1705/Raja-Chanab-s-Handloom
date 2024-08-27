import { FunctionComponent } from "react";
import FormContainer from "../components/FormContainer";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import "./Desktop3.css";

const Desktop3: FunctionComponent = () => {
  return (
    <div className="desktop-4">
      <div className="desktop-4-child" />
      <FormContainer />
      <FrameComponent3 />
      <FrameComponent4 />
      <div className="add-product-row">
        <div className="buttons-stars">
          <div className="buttons-stars-child" />
          <div className="add-product">Add Product</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop3;
