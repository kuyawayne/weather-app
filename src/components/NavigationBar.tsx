import React, { ChangeEvent, FunctionComponent } from "react";
import { Navbar, Input, Select } from "react-daisyui";
import Location from "./../assets/img/icons8-location-48.png";
import styles from "./../css_modules/location.icon.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { themeActions } from "../state/reducers/theme";

interface NavigationBarProps {
  address?: string;
}

const NavigationBar: FunctionComponent<NavigationBarProps> = (props): JSX.Element => {
  const state = useSelector((state: RootState) => state.theme);

  const dispatch =  useDispatch();

  const handleSwitchTheme = (event: ChangeEvent) => {
    const { value } = (event.target) as HTMLSelectElement;

    dispatch(themeActions.setTheme(value));
  };

  return (
    <Navbar>
      <Navbar.Start className={"gap-2 px-2"}>
        <img src={Location} alt="location.png" className={styles.icon} />
        <p>{props.address}</p>
      </Navbar.Start>

      <Navbar.Center>
        <Input placeholder={"How's the weather for today here?"} color={"ghost"} size={"md"} className={styles.input} />
      </Navbar.Center>

      <Navbar.End>
        <Select color={"accent"} onChange={handleSwitchTheme}>
          {
            state.themes.map((theme, index) => {
              return (
                <option selected={state.theme === theme} value={theme} key={index}>{theme}</option>
              );
            })
          }
        </Select>
      </Navbar.End>
    </Navbar>
  );
};

export default NavigationBar;