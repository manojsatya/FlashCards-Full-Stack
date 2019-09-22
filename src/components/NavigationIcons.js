import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/SettingsApplications";

const useStyles = makeStyles({
  root: {
    borderRadius: "1.5rem 1.5rem 0 0",
    width: "100vw",
    height: "10vh",
    backgroundColor: "skyblue",
    position: "fixed",
    bottom: 0,
    marginBottom: "-10px"
  }
});

function NavigationIcons({ onClick }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon fontSize="large" />}
        key="0"
        onClick={() => onClick("home")}
      />
      <BottomNavigationAction
        label="Add"
        value="add"
        icon={<AddIcon fontSize="large" />}
        key="1"
        onClick={() => onClick("add")}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon fontSize="large" />}
        key="2"
        onClick={() => onClick("favorites")}
      />

      <BottomNavigationAction
        label="Settings"
        value="settings"
        icon={<SettingsIcon fontSize="large" />}
        key="3"
        onClick={() => onClick("settings")}
      />
    </BottomNavigation>
  );
}

export default NavigationIcons;