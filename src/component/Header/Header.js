import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  IconButton,
  Tabs,
  Box,
  Link,
  Tab,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./style";
import { useNavigate } from "react-router-dom";
import { Link as LinkDom } from "react-router-dom";
import authApi from "../../apis/auth.api";
import cookie from 'react-cookies';
import { useLocalContext } from "../../context/context";

const Header = ({ children }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  //Profile dialog
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  const handleClickProfile = (event) => setAnchorElProfile(event.currentTarget);
  const handleCloseProfile = () => setAnchorElProfile(null);

  const {
    setDataInfo
  } = useLocalContext();

  //Log out
  const logout = async () => {
    try {
      const mess = await authApi.logout();
      cookie.remove('user_data');
      cookie.remove('access_token');
      setDataInfo({})
      alert(mess?.message)
      navigate("/login")
    }
    catch (err) {
      console.log("ERROR login, err: ", err)

      if (Object.keys(err).length > 0) {
        alert(err?.message)
      }
      else {
        // An error has occurred
        alert('An error has occurred')
      }
    }
  }

  return (
    <>
        <div className={classes.root}>
          <AppBar className={classes.appBar} position="static">
            <Toolbar className={classes.toolbar}>
              <div className={classes.headerWrapper}>
                {children}
                <Link underline="none" to="/" component={LinkDom}>
                  <Typography variant="h6" className={classes.title}>
                    Classroom Admin
                  </Typography>
                </Link>
              </div>

              <div className={classes.header__wrapper__right}>
                <div>
                  <IconButton onClick={handleClickProfile}>
                    <Avatar />
                  </IconButton>
                  <Menu
                    anchorEl={anchorElProfile}
                    open={Boolean(anchorElProfile)}
                    onClose={handleCloseProfile}
                    onClick={handleCloseProfile}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                  >
                    {/* <MenuItem component={LinkDom} to="profile">
                      Profile
                    </MenuItem>
                    <Divider /> */}
                    <MenuItem onClick={logout}>
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </div>
    </>
  );
};

export default Header;
