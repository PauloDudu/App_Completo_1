import React, { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const [value, setValue] = useState("recents");
  const history = useHistory();
  const handleChange = (event, newValue) => {
    history.push(`/${newValue}`);
  };

  return (
    <BottomNavigation
      value={value}
      style={{ outline: "none" }}
      onChange={handleChange}
    >
      <BottomNavigationAction
        style={{ outline: "none" }}
        label="Recents"
        value="users"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        style={{ outline: "none" }}
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        style={{ outline: "none" }}
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        style={{ outline: "none" }}
        label="Folder"
        value="folder"
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  );
};
export default Dashboard;
