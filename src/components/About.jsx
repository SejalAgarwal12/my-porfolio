import { Box, Typography, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function About() {
  const theme = useTheme();

  return (
    <Box id="about" sx={{ py: 10, px: 2, maxWidth: 1200, mx: "auto" }}>
      {/* Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          mb: 6,
          fontWeight: 800,
          fontSize: { xs: "2.5rem", md: "3rem" },
          letterSpacing: "4px",
          textAlign: "center",
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
        }}
      >
        ABOUT ME
      </Typography>

      {/* Content Wrapper */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
          flexWrap: "nowrap",
        }}
      >
        {/* Left: GIF */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ flex: 1, display: "flex", justifyContent: "center" }}
        >
          <Box
            component="img"
            src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
            alt="Coding gif"
            sx={{
              width: { xs: "80%", md: "100%" },
              borderRadius: 3,
              boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              mb: { xs: 3, md: 0 }, // margin bottom on mobile for spacing
            }}
          />
        </MotionBox>

        {/* Right: Content */}
        <Box sx={{ flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" }, // center on mobile, start on desktop
            }}
          >
          <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
            I’m a passionate <b>MERN Stack Developer</b> who loves creating
            interactive, user-friendly web applications. I enjoy problem-solving
            and turning ideas into real-world projects.
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            With experience in building full-stack applications using MongoDB,
            Express, React, and Node.js, I focus on clean code, responsive UI,
            and smooth user experiences.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            href="https://drive.google.com/file/d/1Ys1-1fC5pwGA57CC4T7OUOjQimXCOHMc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontWeight: 700,
              borderRadius: 3,
              px: 4,
              py: 1.5,
              background: "linear-gradient(90deg, #0288d1, #d32f2f)", // gradient background
              color: "#fff",
              textTransform: "none", // keep text as-is
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)", // subtle shadow
            }}
          >
            Check My Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
