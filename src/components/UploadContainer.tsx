import { FunctionComponent } from "react";
import "./UploadContainer.css";

export type UploadContainerType = {
  className?: string;
};

const UploadContainer: FunctionComponent<UploadContainerType> = ({
  className = "",
}) => {
  return (
    <div className={`upload-container1 ${className}`}>
      <div className="upload-elements">
        <div className="add-post-button-container">
          <div className="add-posts">{`Add Posts : `}</div>
        </div>
        <div className="drag-drop-upload-container">
          <div className="drag-drop-upload">
            <div className="drag-drop-upload-area">
              <div className="drag-drop-upload-area-child" />
              <img
                className="upload-cloud-icon2"
                loading="lazy"
                alt=""
                src="/upload-cloud1.svg"
              />
              <div className="drag-drop-upload-instructions">
                <div className="drag-files-here-and-click-to-u-group">
                  <div className="drag-files-here2">
                    Drag Files here and Click to upload
                  </div>
                  <div className="upload-3-files1">Upload 3 files only</div>
                </div>
              </div>
            </div>
          </div>
          <div className="post-links-container">
            <div className="post-links">
              <div className="add-post-links">{`Add Post Links  : `}</div>
            </div>
            <div className="post-links-input" />
          </div>
        </div>
        <div className="view-likes-container-parent">
          <div className="view-likes-container">
            <div className="view-post-container">
              <div className="add-posts">{`View on each Post : `}</div>
            </div>
            <div className="post-links-input" />
          </div>
          <div className="likes-container">
            <div className="likes">
              <div className="view-post-container">
                <div className="add-posts">{`Likes on each Post : `}</div>
              </div>
              <div className="post-links-input" />
            </div>
          </div>
        </div>
      </div>
      <div className="profile-link-container-wrapper">
        <div className="profile-link-container">
          <div className="profile-link-input-container">
            <div className="add-posts">{`Profile Link : `}</div>
          </div>
          <div className="profile-link-input" />
        </div>
      </div>
    </div>
  );
};

export default UploadContainer;
