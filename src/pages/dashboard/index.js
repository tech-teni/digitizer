import React from "react";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="content-container">
        <section className="spatial-section">
          <div className="main-nav">
            <h5>Spartial Templates</h5>
          </div>

          <div className="search-container">
            <input type="search" placeholder="Search" />
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <p>recently created</p>

          <ul className="option-list">
            <li>
              <div className="image-container">
                {/* <img src="" alt="" /> */}
              </div>
              <div className="list-info">
                <h6>Ambulance</h6>
                <div>
                  <span>Bus</span>
                  <span>Medical</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section></section>
      </div>
    </>
  );
};

export default Dashboard;
