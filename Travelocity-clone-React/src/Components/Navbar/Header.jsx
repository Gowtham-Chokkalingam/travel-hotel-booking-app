import React from "react";
import {
  AppBar,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../Store/Action";


import "./drawer.css";


import DrawerComp from "./Drawer";
import Popover1 from "./Popover";
import TravelPopover1 from "./TravelPopover"
const Header = () => {

  const userName = useSelector((state) => state.userName);
  const dispatch = useDispatch();

  // console.log(userName);

  const handleSignOut = () => {
    dispatch(logOut());
  }


  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const logo = "https://www.travelocity.com/_dms/header/logo.svg?locale=en_US&siteid=80001&2";

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#3f51b5", marginLeft: "auto" }} style={{ padding: "8px" }}>
        <Toolbar>

          <Link to="/"><img style={{ marginRight: '2vh' }} src={logo} alt="" /></Link>

          <TravelPopover1 />
          {isMatch ? (
            <>


              <DrawerComp />
            </>
          ) : (
            <>
              <div id="rightbar">
                <div> Español</div>
                <div>List your property</div>
                <div>Support</div>
                <div>Trips</div>
                <Popover1></Popover1>
                <div><Link style={{ display: `${(userName === "") ? "none" : "inline"}` }} to="#" onClick={handleSignOut}>Sign out</Link></div>
              </div>


            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment >
  );
};

export default Header;
