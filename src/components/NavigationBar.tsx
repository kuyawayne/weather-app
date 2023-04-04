import React, { FunctionComponent } from "react";
import { Navbar, Input, Toggle } from "react-daisyui";
import Location from "./../assets/img/icons8-location-48.png";
import styles from "./../css_modules/location.icon.module.css";

const NavigationBar: FunctionComponent = (): JSX.Element => {
  return (
    <Navbar>
      <Navbar.Start className={"gap-2 px-2"}>
        <img src={Location} alt="location.png" className={styles.icon} />
        <p>Dumaguete City, Negros Oriental</p>
      </Navbar.Start>

      <Navbar.Center>
        <Input placeholder={"How's the weather for today here?"} color={"ghost"} size={"md"} className={styles.input} />
      </Navbar.Center>

      <Navbar.End className={"gap-2 px-2"}>
        <Toggle checked={true} color={"info"} />
        <p>Dark Mode</p>
      </Navbar.End>
    </Navbar>
  );
};

export default NavigationBar;