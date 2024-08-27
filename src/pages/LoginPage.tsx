import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onLoginButtonClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  return (
    <div className="login-page">
      <h1 className="house-of-chanabs">{`House of  Chanab’s `}</h1>
      <section className="login-now-parent">
        <h1 className="login-now">Login now</h1>
        <div className="frame-parent">
          <div className="frame-wrapper">
            <form className="admin-input-wrapper-parent">
              <div className="admin-input-wrapper">
                <div className="hi-welcome-back">{`Hi, Welcome back 👋 `}</div>
                <div className="rectangle-parent">
                  <div className="frame-child" />
                  <div className="login-with-admin">Login with Admin ID</div>
                </div>
              </div>
              <div className="frame-group">
                <div className="email-input-wrapper-parent">
                  <div className="email-input-wrapper">
                    <div className="email-separator">
                      <div className="whatsapp" />
                    </div>
                    <div className="or-login-with">or Login with Email</div>
                    <div className="email-separator1">
                      <div className="whatsapp" />
                    </div>
                  </div>
                  <div className="email">Email</div>
                </div>
                <div className="rectangle-group">
                  {/* <input type="" /> */}
                  <div className="frame-child" />
                  <div className="enter-your-email">Enter your email id</div>
                </div>
                <div className="password-parent">
                  <div className="password">Password</div>
                  <div className="rectangle-container">
                    <div className="frame-child" />
                    <div className="password-input-wrapper">
                      <div className="enter-your-email">
                        Enter your password
                      </div>
                    </div>
                    <img
                      className="basileye-closed-solid-icon"
                      alt=""
                      src="/basileyeclosedsolid.svg"
                    />
                  </div>
                </div>
                <div className="frame-container">
                  <div className="frame-div">
                    <div className="rectangle-div" />
                    <div className="remember-me">Remember Me</div>
                  </div>
                  <div className="forgot-password">Forgot Password?</div>
                </div>
              </div>
              <div className="login-button-parent">
                <div className="login-button" onClick={onLoginButtonClick} />
                <div className="login">Login</div>
              </div>
            </form>
          </div>
          <img
            className="reshot-illustration-website-de-icon"
            loading="lazy"
            alt=""
            src="/reshotillustrationwebsitedesignu3pzxdsevy-1@2x.png"
          />
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
