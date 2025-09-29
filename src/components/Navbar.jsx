import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Stack,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as ScrollLink } from "react-scroll";
import { Brightness4, Brightness7, GitHub, LinkedIn } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { LightMode, DarkMode } from "@mui/icons-material";

export default function Navbar({ mode, setMode }) {
  const [open, setOpen] = useState(false);
  const [elevate, setElevate] = useState(false);
  const theme = useTheme();

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setElevate(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar position="static" color="transparent" elevation={elevate ? 4 : 0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" 
          sx={{
          fontWeight: 700,
          fontSize:"1.5rem" ,
          letterSpacing: "1px",
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(90deg, #c0cfd6, #d1b8b8)"
              : "linear-gradient(90deg, #101011, #333131)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow:
            theme.palette.mode === "dark"
              ? "2px 2px 6px rgba(0,0,0,0.4)"
              : "none",
        }}>
            PORTFOLIO
          </Typography>

          {/* Centered nav links for desktop */}
          <Stack
            direction="row"
            spacing={3}
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <ScrollLink to="about" smooth duration={500}>
              <Button sx={{ color: theme.palette.text.primary,fontSize: "1.2rem",fontWeight: 600,
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "transparent", boxShadow: "none" }, }}>About</Button>
            </ScrollLink>
            <ScrollLink to="projects" smooth duration={500}>
              <Button sx={{ color: theme.palette.text.primary,fontSize: "1.2rem",fontWeight: 600,
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "transparent", boxShadow: "none" }, }}>Projects</Button>
            </ScrollLink>
            <ScrollLink to="skills" smooth duration={500}>
              <Button sx={{ color: theme.palette.text.primary,fontSize: "1.2rem",fontWeight: 600,
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "transparent", boxShadow: "none" }, }}>Skills</Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth duration={500}>
              <Button sx={{ color: theme.palette.text.primary,fontSize: "1.2rem",fontWeight: 600,
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "transparent", boxShadow: "none" }, }}>Contact</Button>
            </ScrollLink>
          </Stack>

          {/* Right side icons */}
          <Stack direction="row" spacing={1} sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              component="a"
              href="https://github.com/SejalAgarwal12"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHub />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com/in/sejal-agarwal-8a101716b"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              color="inherit"
            >
              {/* {mode === "light" ? <Brightness4 /> : <Brightness7 />} */}
              {mode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Stack>

          {/* Mobile menu icon */}
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setOpen(!open)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile dropdown menu */}
      {open && (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            p: 2,
            backgroundColor:
              theme.palette.mode === "light"
                ? "rgba(255,255,255,0.95)"
                : "rgb(15, 22, 36)",
          }}
        >
          <ScrollLink to="hero" smooth duration={500} onClick={() => setOpen(false)}>
            <Button sx={{color: theme.palette.text.primary,backgroundColor: "transparent",
             "&:hover": { backgroundColor: "transparent", boxShadow: "none" },}}>About</Button>
          </ScrollLink>
          <ScrollLink to="projects" smooth duration={500} onClick={() => setOpen(false)}>
            <Button sx={{color: theme.palette.text.primary,backgroundColor: "transparent",
             "&:hover": { backgroundColor: "transparent", boxShadow: "none" },}}>Projects</Button>
          </ScrollLink>
          <ScrollLink to="skills" smooth duration={500} onClick={() => setOpen(false)}>
            <Button sx={{color: theme.palette.text.primary,backgroundColor: "transparent",
             "&:hover": { backgroundColor: "transparent", boxShadow: "none" },}}>Skills</Button>
          </ScrollLink>
          <ScrollLink to="contact" smooth duration={500} onClick={() => setOpen(false)}>
            <Button sx={{color: theme.palette.text.primary,backgroundColor: "transparent",
             "&:hover": { backgroundColor: "transparent", boxShadow: "none" },}}>Contact</Button>
          </ScrollLink>

          {/* Icons + theme toggle for mobile */}
          <Stack direction="row" spacing={1} mt={1}>
            <IconButton
              component="a"
              href="https://github.com/SejalAgarwal12"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{ fontSize: "1.5rem" }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com/in/YourLinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              sx={{ fontSize: "1.5rem" }}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              sx={{ ml: "auto",fontSize: "1.5rem" }}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              color="inherit"
            >
              {mode === "light" ? <Brightness4 /> : <Brightness7 />}
            </IconButton>
          </Stack>
        </Box>
      )}
    </>
  );
}
