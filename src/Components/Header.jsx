import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Card, CardContent } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useState } from "react";
import content from "../Constants/CategoryData";
import { AccountCircle } from "@mui/icons-material";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";

const nativeNames = [
  "English",
  "中文",
  "हिन्दी",
  "Español",
  "Français",
  "العربية",
  "বাংলা",
  "Русский",
  "Português",
  "اردو",
  "Deutsch",
  "日本語",
  "Kiswahili",
  "한국어",
  "Italiano",
];

const pages = [
  "About",
  "Media",
  "News",
  "Purchase",
  "Social Media",
  "Contact Us",
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [hoveredPage, setHoveredPage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handlePageHover = (page) => {
    setHoveredPage(page);
  };

  const handlePageLeave = () => {
    setHoveredPage(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "rgb(24,24,24)",
        "&. MuiAppBar-colorPrimary": { bgcolor: "transparent" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PLAYGROUND
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", p: 0, m: 0 },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    "&:hover": { backgroundColor: "grey" },

                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PLAYGROUND
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((pageTitle) => (
              <>
                <Button
                  key={pageTitle}
                  onMouseEnter={() => handlePageHover(pageTitle)}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    cursor: "pointer",
                    marginRight: "3px",
                    "&:hover": { backgroundColor: "grey" },
                    padding: "0px 8px 0px 8px",
                    borderRadius: 1,
                  }}
                >
                  {pageTitle}
                </Button>

                {hoveredPage === pageTitle && (
                  <Card
                    sx={{
                      position: "absolute",
                      top: "100%",
                      left: 100,
                      zIndex: 1000,
                      backgroundColor: "rgb(56, 56, 56)",
                      borderRadius: "20px",
                      width: "auto",
                      maxWidth: "800px",
                      marginTop: "30px",
                      height: "auto",
                    }}
                    onMouseLeave={handlePageLeave}
                  >
                    <CardContent className="w-[800px] h-[200px] ">
                      {content.map((item) => {
                        if (item.title === pageTitle) {
                          return (
                            <div
                              key={item.id}
                              className="flex flex-row text-left"
                            >
                              <div className="flex flex-col items-start">
                                <h3 className="text-white font-semibold text-2xl">
                                  {item.title}
                                </h3>
                                <p className="text-gray-300 py-2">
                                  {item.description}
                                </p>
                              </div>

                              <div
                                style={{ width: "30%", height: "auto" }}
                                className="flex flex-col text-sky-500 mt-10 mb-4 ml-5 cursor-pointer"
                              >
                                <div>
                                  {item.latest && (
                                    <div>
                                      <h1>{item.latest.title}</h1>
                                      {item.latest.date && (
                                        <h1>{item.latest.date}</h1>
                                      )}
                                      {item.latest.email && (
                                        <h1>{item.latest.email}</h1>
                                      )}
                                      {item.latest.phone && (
                                        <h1>{item.latest.phone}</h1>
                                      )}
                                      {item.latest.description && (
                                        <h1>{item.latest.description}</h1>
                                      )}
                                      {item.latest.address && (
                                        <h1>{item.latest.address}</h1>
                                      )}
                                    </div>
                                  )}
                                </div>
                                <div>
                                  {item.featured && (
                                    <div>
                                      {item.featured.title && (
                                        <h1>{item.featured.title}</h1>
                                      )}
                                      {item.featured.platform && (
                                        <h1>{item.featured.platform}</h1>
                                      )}
                                      {item.featured.facebook && (
                                        <h1>{item.featured.facebook}</h1>
                                      )}
                                      {item.featured.twitter && (
                                        <h1>{item.featured.twitter}</h1>
                                      )}
                                      {item.featured.instagram && (
                                        <h1>{item.featured.instagram}</h1>
                                      )}
                                      {item.featured.releaseDate && (
                                        <h1>{item.featured.releaseDate}</h1>
                                      )}
                                      {item.featured.price && (
                                        <h1>{item.featured.price}</h1>
                                      )}
                                      {item.featured.author && (
                                        <h1>{item.featured.author}</h1>
                                      )}
                                      {item.featured.date && (
                                        <h1>{item.featured.date}</h1>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div
                                style={{
                                  width: "20%",
                                  height: "auto",
                                  cursor: "pointer",
                                }}
                              >
                                <div className="text-sky-500 mt-10 mb-4">
                                  {item.articles && (
                                    <div>
                                      {item.articles.title && (
                                        <h1>{item.articles.title}</h1>
                                      )}
                                      {item.articles.date && (
                                        <h1>{item.articles.date}</h1>
                                      )}
                                      {item.articles.author && (
                                        <h1>{item.articles.author}</h1>
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </CardContent>
                  </Card>
                )}
              </>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="search"
              color="inherit"
              onClick={toggleSearch}
            >
              <SearchIcon />
            </IconButton>

            <div style={{ position: "relative", display: "inline-block" }}>
              <IconButton
                size="large"
                color="inherit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <LanguageIcon />
              </IconButton>

              {isHovered && (
                <Card
                  sx={{
                    position: "absolute",
                    top: "100%",
                    zIndex: 1000,
                    backgroundColor: "rgb(56, 56, 56)",
                    borderRadius: "10px",
                    width: "auto",
                    minWidth: "150px",
                    marginTop: "30px",
                    height: "auto",
                  }}
                >
                  <CardContent>
                    <Box className="flex flex-row justify-between text-white">
                      <Typography>Language </Typography>

                      <LanguageIcon />
                    </Box>

                    {nativeNames.map((name) => (
                      <Typography className="text-gray-300 text-left">{name}</Typography>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </Box>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            ></Menu>
          </div>
          <button className="bg-sky-500 rounded-lg w-24 h-8 align-middle">
            Download
          </button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
