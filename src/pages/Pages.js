import React from "react";
import "./pages.css";

const Pages = ({ isOpen, onClose, checkedItems, handleChange }) => {
  if (!isOpen) {
    return null;
  }
  
  const handleAllPagesChange = (event) => {
    const { checked } = event.target;
    handleChange({
      target: { name: "page1", checked },
    });
    handleChange({
      target: { name: "page2", checked },
    });
    handleChange({
      target: { name: "page3", checked },
    });
  };


  const handlePageChange = (event) => {

    const { name } = event.target;
    
    handleChange({
      target: { name: "page1", checked: name === "page1" },
    });
    handleChange({
      target: { name: "page2", checked: name === "page2" },
    });
    handleChange({
      target: { name: "page3", checked: name === "page3" },
    });
  };

  return (
    <div className="Pages-overlay">
      <div className="Pages-content">
        <div className="checkbox-row">
          <div className="all-pages-page">
            <div className="dff">All pages</div>
            {/* <label> */}
            <div>
              <input
              className="input-checkbox-3"
                type="checkbox"
                name="allPages"
                checked={
                  checkedItems.page1 && checkedItems.page2 && checkedItems.page3
                }
                onChange={handleAllPagesChange}
              />
            </div>
          </div>
          {/* </label> */}
        </div>
        <hr style={{ width: "100%" }} />
        <div className="checkbox-row">
          <div className="all-pages-page">
            <div className="dff">Page 1</div>
            <div>
              <input
                type="checkbox"
                name="page1"
                checked={checkedItems.page1}
                onChange={handlePageChange}
                className="input-checkbox-3"
              />
            </div>
          </div>
        </div>
        <div className="checkbox-row">
          <div className="all-pages-page">
            <div className="dff">Page 2</div>
            <div>
              <input
                type="checkbox"
                name="page2"
                checked={checkedItems.page2}
                onChange={handlePageChange}
                className="input-checkbox-3"
              />
            </div>
          </div>
        </div>
        <div className="checkbox-row">
          <div className="all-pages-page">
            <div className="dff">Page 3</div>
            <div>
              <input
                type="checkbox"
                name="page3"
                checked={checkedItems.page3}
                onChange={handlePageChange}
                className="input-checkbox-3"
              />
            </div>
          </div>
        </div>
        <hr style={{ width: "100%" }} />
        <button onClick={onClose}>DONE</button>
      </div>
    </div>
  );
};

export default Pages;
