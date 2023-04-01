import React, { FunctionComponent } from "react";
import Location from "./assets/img/icons8-location-48.png";

const Application: FunctionComponent = (): JSX.Element => {
  return (
    <div className={"bg-neutral-700 p-4 h-screen"}>
      <div className="navbar bg-neutral-800 rounded-full px-4">
        <div className="navbar-start gap-2">
          <img src={Location} alt="location" className="w-5" />
          <p>Dumaguete City, Negros Oriental</p>
        </div>

        <div className="navbar-center">
          <input type="text" placeholder="Planning to go somewhere? Check the weather here." className="input input-ghost input-info w-full rounded-full" />
        </div>

        <div className="navbar-end gap-2">
          <input id="darkSwitch" type="checkbox" className="toggle toggle-info" />
          <label htmlFor="darkSwitch">Dark Mode</label>
        </div>
      </div>
    </div>
  );
};

export default Application;