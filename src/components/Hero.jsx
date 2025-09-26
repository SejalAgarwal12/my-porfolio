import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Hero() {
  const theme = useTheme();

  const codeLines = [
    "const greeting = 'Hello World!';",
    "function introduce() {",
    "  console.log('I am a MERN Stack developer');",
    "}",
    "introduce();",
  ];

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1200,
        mx: "auto",
        mt: 8,
        px: 2,
        gap: 4,
        position: "relative",
      }}
    >
      {/* Left: Text */}
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Name */}
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            background: theme.palette.mode === "dark"
              ? "linear-gradient(90deg, #0288d1, #d32f2f)"
              : "linear-gradient(90deg, #1976d2, #d32f2f)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          Hi, I’m Sejal Agarwal
        </Typography>

        {/* Subtitle / Quote */}
        <MotionBox
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontStyle: "italic",
              color: theme.palette.mode === "dark" ? "#b4f8f8ff" : "#0288d1",
              mb: 3,
              letterSpacing: 0.5,
            }}
          >
            From concept to code — I bring ideas to life through web apps.
          </Typography>
        </MotionBox>

      </Box>

      {/* Right: Animated Code Snippet */}
      <MotionBox
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        sx={{
          flex: 1,
          fontFamily: "'Fira Code', monospace",
          backgroundColor: theme.palette.mode === "dark"
            ? "rgba(30, 40, 60, 0.85)"
            : "rgba(220, 220, 220, 0.7)",
          color: theme.palette.mode === "dark" ? "#00ffea" : "#1976d2",
          borderRadius: 3,
          p: 4,
          minWidth: { xs: "100%", md: "400px" },
          boxShadow: theme.palette.mode === "dark"
            ? "0 8px 30px rgba(0,0,0,0.4)"
            : "0 8px 30px rgba(0,0,0,0.2)",
          border: theme.palette.mode === "dark"
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(0,0,0,0.1)",
        }}
      >
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: index * 0.4, type: "spring", stiffness: 120 }}
            style={{ marginBottom: "6px" }}
          >
            <span>{line}</span>
            {index === codeLines.length - 1 && (
              <motion.span
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.6 }}
                style={{ marginLeft: 2 }}
              >
                |
              </motion.span>
            )}
          </motion.div>
        ))}
      </MotionBox>
    </MotionBox>
  );
}
