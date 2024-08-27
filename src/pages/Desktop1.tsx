import { FunctionComponent, useState, useCallback } from "react";
import Desktop9 from "../components/Desktop9";
import PortalPopup from "../components/PortalPopup";
import FrameComponent2 from "../components/FrameComponent2";
import SearchContainer from "../components/SearchContainer";
import { useNavigate } from "react-router-dom";
import "./Desktop1.css";

const Desktop1: FunctionComponent = () => {
  const [isDesktop6Open, setDesktop6Open] = useState(false);
  const navigate = useNavigate();

  const openDesktop6 = useCallback(() => {
    setDesktop6Open(true);
  }, []);

  const closeDesktop6 = useCallback(() => {
    setDesktop6Open(false);
  }, []);

  const onShowProductVisualClick = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  return (
    <>
      <div className="desktop-2">
        <img className="desktop-2-child" alt="" />
        <div className="customers">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <div className="customers-child" />
        </div>
        <img
          className="overview-icon"
          loading="lazy"
          alt=""
          src="/overview.svg"
        />
        <div className="frame-parent1">
          <FrameComponent2 />
          <div className="customer-icon-parent">
            <div className="customer-icon" />
            <div className="costumer">Customers</div>
          </div>
        </div>
        <img
          className="overview-icon1"
          loading="lazy"
          alt=""
          src="/overview-2.svg"
        />
        <div className="activities">Activities</div>
        <div className="divider" />
        <img
          className="desktop-2-item"
          loading="lazy"
          alt=""
          src="/rectangle-15.svg"
        />
        <img className="desktop-2-inner" alt="" src="/rectangle-15.svg" />
        <img className="rectangle-icon" alt="" src="/rectangle-15.svg" />
        <img
          className="desktop-2-child1"
          loading="lazy"
          alt=""
          src="/rectangle-15.svg"
        />
        <img className="desktop-2-child2" alt="" src="/rectangle-15.svg" />
        <img className="desktop-2-child3" alt="" src="/rectangle-15.svg" />
        <img className="desktop-2-child4" alt="" src="/rectangle-15.svg" />
        <img className="desktop-2-child5" alt="" src="/rectangle-15.svg" />
        <main className="search-container-parent">
          <SearchContainer />
          <section className="product-container-wrapper">
            <div className="product-container">
              <div className="product-details-wrapper">
                <h1 className="product-details">Product Details</h1>
              </div>
              <div className="frame-parent2">
                <div className="image-sub-container-parent">
                  <div className="image-sub-container">
                    <div className="image-grid">
                      <div className="image-grid-inner">
                        <img
                          className="frame-child1"
                          loading="lazy"
                          alt=""
                          src="/ellipse-10@2x.png"
                        />
                      </div>
                      <div className="second-image-grid">
                        <img
                          className="image-18-icon"
                          loading="lazy"
                          alt=""
                          src="/image-17@2x.png"
                        />
                        <img
                          className="image-18-1"
                          loading="lazy"
                          alt=""
                          src="/image-18@2x.png"
                        />
                      </div>
                      <img
                        className="image-19-icon"
                        loading="lazy"
                        alt=""
                        src="/image-20@2x.png"
                      />
                      <img
                        className="image-19-icon"
                        loading="lazy"
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                  </div>
                  <div className="list-container-parent">
                    <div className="list-container">
                      <div className="list-inner-container">
                        <div className="product-category-parent">
                          <b className="product-category">Product Category</b>
                          <div className="category-items-container-wrapper">
                            <div className="category-items-container">
                              <div className="category-item">
                                <div className="bedsheets">{`Bedsheets `}</div>
                              </div>
                              <div className="curtains-item">
                                <div className="curtains-container">
                                  <div className="curtains">{` Curtains `}</div>
                                </div>
                                <div className="pillow-covers">
                                  Pillow Covers
                                </div>
                                <div className="bathing-items-container">
                                  <div className="bathing-items-pair-parent">
                                    <div className="bathing-items-pair">
                                      <div className="towels"> Towels</div>
                                    </div>
                                    <div className="bathing-items-pair1">
                                      <div className="blankets">Blankets</div>
                                    </div>
                                    <div className="bathing">Bathing</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category-id-parent">
                        <b className="pillow-covers">Category ID</b>
                        <div className="category-i-d-items-container-wrapper">
                          <div className="category-i-d-items-container">
                            <div className="i-d-item">
                              <div className="bedsheets">BE34SH78</div>
                            </div>
                            <div className="curtains-i-d-item">
                              <div className="i-d-item">
                                <div className="curtains">BE34SH78</div>
                              </div>
                              <div className="frame-parent3">
                                <div className="be34sh78-wrapper">
                                  <div className="curtains">BE34SH78</div>
                                </div>
                                <div className="bathing-i-d-item">
                                  <div className="be34sh783">BE34SH78</div>
                                  <div className="towels-i-d-item">
                                    <div className="curtains">BE34SH78</div>
                                  </div>
                                  <div className="i-d-item">
                                    <div className="curtains">BE34SH78</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-wrapper1">
                      <div className="add-category-icon-parent">
                        <div
                          className="add-category-icon"
                          onClick={openDesktop6}
                        />
                        <b className="add-category">Add Category</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="actions-container-wrapper">
                  <div className="actions-container">
                    <div className="action-title">
                      <b className="product-category">Perform Action</b>
                    </div>
                    <div className="product-actions">
                      <div className="show-product-visual-parent">
                        <div
                          className="show-product-visual"
                          onClick={onShowProductVisualClick}
                        />
                        <div className="show-products">Show Products</div>
                      </div>
                      <div className="pp1 rectangle-parent1">
                        <div className="frame-child2" />
                        <div className="show-products1">Show Products</div>
                      </div>
                      <div className="product-actions-inner">
                        <div className="frame-parent4">
                          <div className="pp2 rectangle-parent2">
                            <div className="frame-child2" />
                            <div className="show-products1">Show Products</div>
                          </div>
                          <div className="rectangle-parent1">
                            <div className="frame-child2" />
                            <div className="show-products1">Show Products</div>
                          </div>
                          <div className="frame-wrapper2">
                            <div className="rectangle-parent4">
                              <div className="frame-child2" />
                              <div className="show-products1">
                                Show Products
                              </div>
                            </div>
                          </div>
                          <div className="i-d-item">
                            <div className="frame-parent5">
                              <div className="rectangle-parent1">
                                <div className="frame-child2" />
                                <div className="show-products1">
                                  Show Products
                                </div>
                              </div>
                              <div className="show-more-button">
                                <b className="show-more">SHOW MORE ....</b>
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
          </section>
        </main>
      </div>
      {isDesktop6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDesktop6}
        >
          <Desktop9 onClose={closeDesktop6} />
        </PortalPopup>
      )}
    </>
  );
};

export default Desktop1;
