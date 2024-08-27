import { FunctionComponent, useCallback } from "react";
import CostumerMenu from "../components/CostumerMenu";
import { useNavigate } from "react-router-dom";
import "./Desktop.css";

const Desktop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onImage16IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRevenueContainerClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  return (
    <div className="desktop-1">
      <main className="desktop-11">
        <footer className="dashboard">
          <CostumerMenu />
          <img className="dashboard-child" alt="" src="/rectangle-151.svg" />
          <div className="content-area">
            <header className="content-header">
              <div className="content-header-child" />
              <div className="header-controls">
                <div className="sort-container">
                  <a className="sort">Sort:</a>
                  <div className="sort-options">
                    <div className="sort-dropdown">
                      <a className="last-week">Last week</a>
                      <img
                        className="downarrow-icon"
                        alt=""
                        src="/downarrow.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="notifications-container">
                <div className="notification-content">
                  <div className="notification-parent">
                    <img
                      className="notification-icon"
                      alt=""
                      src="/notification.svg"
                    />
                    <img
                      className="notification-icon1"
                      loading="lazy"
                      alt=""
                      src="/notification.svg"
                    />
                  </div>
                </div>
                <div className="admin-info">
                  <div className="admin-avatar">
                    <img
                      className="image-16-icon"
                      loading="lazy"
                      alt=""
                      src="/image-16@2x.png"
                      onClick={onImage16IconClick}
                    />
                    <div className="avatar-background" />
                  </div>
                </div>
                <div className="admin-details">
                  <a className="admin-portal">Admin Portal</a>
                  <a className="admingmailcom" onClick={onImage16IconClick}>
                    Admin@gmail.com
                  </a>
                </div>
              </div>
            </header>
            <div className="main-content">
              <div className="content-body">
                <div className="dashboard-header">
                  <div className="title-container">
                    <h2 className="dashboard1">Dashboard</h2>
                    <a className="welcome-back-admin">Welcome back, Admin</a>
                  </div>
                  <div className="stats-container">
                    <div className="sales-container">
                      <div className="sales-content">
                        <img
                          className="sales-content-child"
                          alt=""
                          src="/rectangle-14.svg"
                        />
                        <div className="sales-info-parent">
                          <div className="sales-info">
                            <div className="total-sales">Total Sales</div>
                            <div className="sales-trend">
                              <img
                                className="upward-trend-icon"
                                loading="lazy"
                                alt=""
                                src="/upward-trend.svg"
                              />
                            </div>
                          </div>
                          <div className="placeholder">
                            <div className="div">$345676</div>
                          </div>
                        </div>
                        <div className="revenue-inner">
                          <div className="trend-container">
                            <div className="upward-trend-icon1">
                              <div className="upward-trend-icon-child" />
                              <img
                                className="arrow-up-icon"
                                alt=""
                                src="/arrow-up.svg"
                              />
                              <div className="upward-percentage">
                                <div className="div1">14%</div>
                              </div>
                            </div>
                            <div className="trend-month">
                              <div className="in-this-month">In this month</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="revenue" onClick={onRevenueContainerClick}>
                      <img
                        className="sales-content-child"
                        alt=""
                        src="/rectangle-14.svg"
                      />
                      <div className="frame-parent6">
                        <div className="sales-info">
                          <div className="total-order">Total Order</div>
                          <div className="upward-percentage">
                            <img
                              className="downward-trend-icon"
                              loading="lazy"
                              alt=""
                              src="/downward-trend.svg"
                            />
                          </div>
                        </div>
                        <div className="sales-data">
                          <div className="sales-value customer12">3456</div>
                        </div>
                      </div>
                      <div className="chart-container">
                        <div className="chart-content">
                          <div className="chart-area">
                            <div className="chart-area-child" />
                            <div className="chart-legend">22%</div>
                            <img
                              className="arrow-down-icon"
                              alt=""
                              src="/arrow-down.svg"
                            />
                          </div>
                          <div className="date-range">
                            <div className="in-this-month">In this month</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="revenue1">
                      <img
                        className="sales-content-child"
                        alt=""
                        src="/rectangle-14.svg"
                      />
                      <div className="frame-parent7">
                        <div className="total-customers-parent">
                          <div className="in-this-month">Total Customers</div>
                          <div className="wrapper">
                            <div className="div2">123</div>
                          </div>
                        </div>
                        <div className="upward-percentage">
                          <img
                            className="sales-icon"
                            loading="lazy"
                            alt=""
                            src="/sales-1.svg"
                          />
                        </div>
                      </div>
                      <div className="revenue-inner">
                        <div className="chart-content">
                          <div className="rectangle-parent6">
                            <div className="frame-child7" />
                            <div className="icon-wrapper">
                              <img className="icon" alt="" src="/icon.svg" />
                            </div>
                            <div className="p">P</div>
                          </div>
                          <div className="trend-month">
                            <div className="in-this-month">In this month</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="products-container-parent">
                  <div className="products-container">
                    <div className="top-products">Top Products</div>
                    <div className="products-grid">
                      <img
                        className="products-grid-child"
                        alt=""
                        src="/rectangle-151.svg"
                      />
                      <div className="product-row">
                        <div className="product-item">
                          <img
                            className="product-image-icon"
                            loading="lazy"
                            alt=""
                            src="/ellipse-7@2x.png"
                          />
                          <div className="image-wrapper">
                            <img
                              className="image-17-icon2"
                              loading="lazy"
                              alt=""
                              src="/image-171@2x.png"
                            />
                          </div>
                          <img
                            className="image-19-icon1"
                            loading="lazy"
                            alt=""
                            src="/image-19@2x.png"
                          />
                        </div>
                      </div>
                      <div className="product-details1">
                        <div className="bedsheet">
                          <p className="blank-line">&nbsp;</p>
                          <p className="blank-line">Bedsheet</p>
                        </div>
                        <div className="curtains1">Curtains</div>
                        <div className="sub-category">
                          <div className="hand-towels">Hand Towels</div>
                        </div>
                      </div>
                      <div className="product-rating">
                        <div className="rating-container">
                          <div className="star-filled-parent">
                            <img
                              className="star-filled-icon"
                              alt=""
                              src="/star-filled.svg"
                            />
                            <img
                              className="star-filled-icon1"
                              alt=""
                              src="/star-filled.svg"
                            />
                            <img
                              className="star-filled-icon2"
                              loading="lazy"
                              alt=""
                              src="/star-filled.svg"
                            />
                            <img
                              className="star-filled-icon3"
                              loading="lazy"
                              alt=""
                              src="/star-filled.svg"
                            />
                            <img
                              className="star-filled-icon4"
                              alt=""
                              src="/star-filled.svg"
                            />
                            <img
                              className="star-filled-icon5"
                              alt=""
                              src="/star-filled.svg"
                            />
                            <img
                              className="star-filled-icon6"
                              alt=""
                              src="/star-filled.svg"
                            />
                            <img
                              className="star-filled-icon7"
                              loading="lazy"
                              alt=""
                              src="/star-filled.svg"
                            />
                            <img
                              className="star-filled-icon8"
                              alt=""
                              src="/star-filled.svg"
                            />
                            <img
                              className="star-filled-icon9"
                              alt=""
                              src="/star-filled.svg"
                            />
                            <img
                              className="star-filled-icon10"
                              alt=""
                              src="/star-filled.svg"
                            />
                            <img
                              className="star-filled-icon11"
                              loading="lazy"
                              alt=""
                              src="/star-filled.svg"
                            />
                          </div>
                          <img
                            className="star-filled-icon12"
                            loading="lazy"
                            alt=""
                            src="/star-filled.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="store-header-parent">
                    <div className="store-header">
                      <div className="store">{`Store `}</div>
                    </div>
                    <div className="store-grid">
                      <img
                        className="products-grid-child"
                        alt=""
                        src="/rectangle-151.svg"
                      />
                      <div className="product-card">
                        <div className="product-info">
                          <div className="products">PRODUCTS</div>
                          <div className="bedsheet-parent">
                            <div className="bedsheet2">Bedsheet</div>
                            <div className="bedsheet2">Bedsheet</div>
                            <div className="bedsheet2">Bedsheet</div>
                          </div>
                        </div>
                        <div className="admin-info">
                          <div className="price-header">
                            <div className="price">PRICE</div>
                            <div className="price-labels">
                              <div className="div3">$34</div>
                            </div>
                            <div className="price-labels">
                              <div className="div3">$34</div>
                            </div>
                            <div className="price-labels">
                              <div className="div3">$34</div>
                            </div>
                          </div>
                        </div>
                        <div className="stock-header-wrapper">
                          <div className="stock-header">
                            <div className="stock">STOCK</div>
                            <div className="stock-labels">
                              <div className="div6">134</div>
                            </div>
                            <div className="stock-labels1">
                              <div className="div6">134</div>
                            </div>
                            <div className="stock-labels">
                              <div className="div6">134</div>
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
        </footer>
      </main>
    </div>
  );
};

export default Desktop;
