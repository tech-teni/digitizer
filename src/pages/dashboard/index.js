import React from "react";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <section className="spatial-section">
        <div className="main-nav">
          <h5>Spartial Templates</h5>
        </div>

        <div className="search-container">
          <input type="search" />
          <img src="" alt="" />
        </div>
        <p>recently created</p>

        <ul>
          <li>
            <img src="" alt="" />
            <div>
              <h6>Ambulance</h6>
              <div>
                <span>Bus</span>
                <span>Medical</span>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Dashboard;
