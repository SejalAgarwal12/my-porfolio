import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, Launch } from "@mui/icons-material";

const MotionBox = motion(Box);

const projects = [
  {
    title: "E-commerce App",
    description:
      "E-Commerce App handles full-stack logic, CRUD operations, and user flows.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/yourhandle/ecommerce-app",
    demo: "https://your-ecommerce.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and Material UI.",
    tech: ["React", "MUI", "Framer Motion"],
    github: "https://github.com/yourhandle/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "Task/Management App",
    description:
      "Demonstrates state management (Redux), user interaction, and backend integration.",
    tech: ["MongoDB", "React", "Redux", "Node.js"],
    github: "https://github.com/yourhandle/ecommerce-app",
    demo: "https://your-ecommerce.com",
  },
  {
    title: "Another Project",
    description:
      "Example project to demonstrate CSS Grid layout handling variable content.",
    tech: ["React", "Node.js", "MUI"],
    github: "https://github.com/yourhandle/another-project",
    demo: "https://example.com",
  },
];

export default function Projects() {
  const theme = useTheme();

  return (
    <Box id="projects" sx={{ py: 10, px: 2, maxWidth: 1200, mx: "auto" }}>
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
              : "unset",
          WebkitBackgroundClip:
            theme.palette.mode === "dark" ? "text" : "unset",
          WebkitTextFillColor:
            theme.palette.mode === "dark" ? "transparent" : "unset",
          color:
            theme.palette.mode === "light"
              ? theme.palette.text.primary
              : "unset",
          textShadow:
            theme.palette.mode === "dark"
              ? "2px 2px 6px rgba(0,0,0,0.4)"
              : "none",
        }}
      >
        PROJECTS
      </Typography>

      {/* Projects Grid using CSS Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, // 1 column mobile, 2 columns desktop
          gap: 4,
        }}
      >
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%", // stretch card to fill grid cell
                p: 2,
                borderRadius: 3,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(30, 40, 60, 0.85)"
                    : "rgba(255, 255, 255, 0.9)",
                color: theme.palette.text.primary,
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 8px 30px rgba(0,0,0,0.5)"
                    : "0 8px 20px rgba(0,0,0,0.15)",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 12px 40px rgba(0,0,0,0.6)"
                      : "0 12px 30px rgba(0,0,0,0.25)",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {project.tech.map((tech, i) => (
                    <Chip label={tech} size="small" key={i} />
                  ))}
                </Box>
              </CardContent>

              <CardActions
                sx={{
                  mt: "auto",
                  display: "flex",
                  justifyContent: project.demo ? "space-between" : "flex-start",
                }}
              >
                <Button
                  size="small"
                  startIcon={<GitHub />}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: "linear-gradient(90deg, #315e77ff, #873636ff)",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Code
                </Button>
                {project.demo && (
                  <Button
                    size="small"
                    startIcon={<Launch />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                    background: "linear-gradient(90deg, #315e77ff, #873636ff)",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                  >
                    Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </MotionBox>
        ))}
      </Box>
    </Box>
  );
}
