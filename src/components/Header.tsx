import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBACKTextClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  return (
    <div className={`header ${className}`}>
      <div className="profile-pics">
        <div className="image-18-wrapper">
          <img
            className="image-18-icon1"
            loading="lazy"
            alt=""
            src="/image-18@2x.png"
          />
        </div>
        <div className="single-pic-row">
          <img
            className="single-pic-row-child"
            loading="lazy"
            alt=""
            src="/ellipse-8@2x.png"
          />
        </div>
        <div className="image-nav">
          <div className="image-buttons">
            <div className="image-button">
              <img
                className="image-20-icon"
                loading="lazy"
                alt=""
                src="/image-17@2x.png"
              />
            </div>
            <img
              className="image-buttons-child"
              loading="lazy"
              alt=""
              src="/ellipse-8@2x.png"
            />
          </div>
        </div>
        <div className="image-20-wrapper">
          <img
            className="image-20-icon"
            loading="lazy"
            alt=""
            src="/image-20@2x.png"
          />
        </div>
        <div className="image-21-wrapper">
          <img
            className="image-20-icon"
            loading="lazy"
            alt=""
            src="/image-20@2x.png"
          />
        </div>
        <b className="back" onClick={onBACKTextClick}>
          BACK
        </b>
      </div>
      <div className="content">
        <div className="data-rows">
          <div className="data-items">
            <div className="ed-parent">
              <div className="ed">#659ed</div>
              <div className="fg-wrapper">
                <div className="ed">#908fg</div>
              </div>
              <div className="g-wrapper">
                <div className="ed">#9453g</div>
              </div>
              <div className="rt-wrapper">
                <div className="rt">#123rt</div>
              </div>
              <div className="double-data">
                <div className="single-data">
                  <div className="ed">#234gh</div>
                </div>
                <div className="ed">#908fg</div>
              </div>
            </div>
          </div>
          <div className="multi-data-row">
            <div className="parent">
              <div className="div10">$314</div>
              <div className="div10">$341</div>
              <div className="frame">
                <div className="div12">$11</div>
              </div>
              <div className="triple-names">
                <div className="fg-wrapper">
                  <div className="div13">$34</div>
                </div>
                <div className="wrapper2">
                  <div className="div10">$183</div>
                </div>
                <div className="div10">$341</div>
              </div>
            </div>
          </div>
          <div className="names-row">
            <div className="single-names">
              <div className="raj">{`Raj `}</div>
            </div>
            <div className="double-names">
              <div className="ankita">Ankita</div>
              <div className="triple-names">
                <div className="ed">Shubhum</div>
                <div className="alia">Alia</div>
                <div className="double-names">
                  <div className="ed">Sahil Roy</div>
                  <div className="ed">Akhil Raj</div>
                </div>
              </div>
            </div>
          </div>
          <div className="expanded-row">
            <div className="expanded-values">
              <div className="g-wrapper">
                <div className="ed">15/03/24</div>
              </div>
              <div className="multiple-values">
                <div className="ed">01/04/24</div>
                <div className="ed-parent">
                  <div className="ed">15/04/24</div>
                  <div className="ed-parent">
                    <div className="ed">24/04/24</div>
                    <div className="wrapper4">
                      <div className="ed">27/04/24</div>
                    </div>
                    <div className="ed">05/05/24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-status">
            <div className="order-status-values">
              <div className="vector-parent1">
                <img className="frame-child16" alt="" src="/rectangle-30.svg" />
                <div className="ed">Out for Delivery</div>
              </div>
              <div className="order-status-values-inner">
                <div className="frame-parent13">
                  <div className="frame-wrapper7">
                    <div className="vector-parent2">
                      <img
                        className="frame-child17"
                        alt=""
                        src="/rectangle-30.svg"
                      />
                      <div className="delivered">Delivered</div>
                    </div>
                  </div>
                  <div className="vector-parent3">
                    <img
                      className="frame-child18"
                      alt=""
                      src="/rectangle-30.svg"
                    />
                    <div className="delivered">In- Progress</div>
                  </div>
                  <div className="frame-wrapper8">
                    <div className="frame-parent14">
                      <div className="frame-wrapper9">
                        <div className="vector-parent2">
                          <img
                            className="frame-child17"
                            alt=""
                            src="/rectangle-30.svg"
                          />
                          <div className="delivered">Delivered</div>
                        </div>
                      </div>
                      <div className="frame-parent15">
                        <div className="vector-parent5">
                          <img
                            className="frame-child20"
                            alt=""
                            src="/rectangle-30.svg"
                          />
                          <div className="delivered">Processing</div>
                        </div>
                        <div className="cancelled-order">
                          <div className="frame-parent16">
                            <div className="vector-parent6">
                              <img
                                className="frame-child21"
                                alt=""
                                src="/rectangle-30.svg"
                              />
                              <div className="delivered">Cancelled</div>
                            </div>
                            <div className="show-more-button2">
                              <b className="show-more2">SHOW MORE ....</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
