import React from "react";
import t from "../../assets/trust.png";
import c from "../../assets/car.png";
import i from "../../assets/immi.png";
import tr from "../../assets/trust.gif";
import ca from "../../assets/car.gif";
import im from "../../assets/immi.gif";
const Projects = () => {
  return (
    <div>
      <section>
        <div class="stats bg-primary text-primary-content h-screen">
          <div class="stat">
            <div class="stat-title">Account balance</div>
            <div class="stat-value">$89,400</div>
            <div class="stat-actions">
              <button class="btn btn-sm btn-success">Add funds</button>
            </div>
          </div>

          <div class="stat">
            <div class="stat-title">Current balance</div>
            <div class="stat-value">$89,400</div>
            <div class="stat-actions">
              <button class="btn btn-sm">Withdrawal</button>
              <button class="btn btn-sm">deposit</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="grid grid-rows-3 grid-flow-col gap-4 h-80">
          <div class="row-start-1 row-span-2">
            <img src={t} alt="" />
          </div>
          <div class="row-start-2 row-span-2">
            <img src={c} alt="" />
          </div>
          <div class="row-start-1 row-span-2">
            <img src={i} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
