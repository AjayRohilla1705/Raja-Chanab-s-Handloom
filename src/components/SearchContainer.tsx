import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./SearchContainer.css";

export type SearchContainerType = {
  className?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  frameInputHeight?: CSSProperties["height"];
  frameInputPadding?: CSSProperties["padding"];
};

const SearchContainer: FunctionComponent<SearchContainerType> = ({
  className = "",
  propPadding,
  propHeight,
  frameInputHeight,
  frameInputPadding,
}) => {
  const searchContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameFormStyle: CSSProperties = useMemo(() => {
    return {
      height: frameInputHeight,
      padding: frameInputPadding,
    };
  }, [frameInputHeight, frameInputPadding]);

  const navigate = useNavigate();

  const onImage16IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header
      className={`search-container ${className}`}
      style={searchContainerStyle}
    >
      <div className="search-container-child" style={rectangleDivStyle} />
      <div className="search-inner-container">
        <div className="search-input-container">
          <Form className="wrapper5" style={frameFormStyle}>
            <Form.Control type="text" id="src" placeholder="Seach Here" />
          </Form>
          <div className="search-wrapper">
            <a className="search">Search</a>
          </div>
        </div>
      </div>
      <div className="notification-container-parent">
        <div className="notification-container">
          <img
            className="notification-icon2"
            loading="lazy"
            alt=""
            src="/notification.svg"
          />
        </div>
        <img
          className="image-16-icon1"
          loading="lazy"
          alt=""
          src="/image-16@2x.png"
          onClick={onImage16IconClick}
        />
        <div className="admin-info1">
          <div className="admin-details1">
            <a className="admin">Admin</a>
            <a className="admingmailcom1">Admin@gmail.com</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SearchContainer;
