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
    title: "WeCare Application",
    description: `A web application designed to connect users with coaches/consultants. Users can browse available coaches, book, 
      cancel, and reschedule appointments, while coaches can manage their scheduled sessions. The platform provides 
      dedicated dashboards for both users and coaches with secure authentication and authorization, and utilizes API calls 
      powered by JSON Server to simulate real backend interactions`,
    tech: ["JSON-Server", , "React", "HTML", "CSS"],
    github: "https://github.com/SejalAgarwal12/WeCare-Application.git",
    demo: "https://github.com/SejalAgarwal12/WeCare-Application.git",
    image: "/images/wecare.jpg",
  },
  {
    title: "Portfolio Website",
    description: `A fully responsive personal portfolio built with React, Material-UI, and Framer Motion 
      It features smooth animations, seamless navigation, and a modern UI with both light and dark themes 
      for an enhanced user experience.`,
    tech: ["React", "MUI", "Framer Motion"],
    github: "https://github.com/SejalAgarwal12/my-portfolio.git",
    demo: "https://github.com/SejalAgarwal12/my-portfolio.git",
    image: "/images/portfolio.png",
  },
  {
    title: "Task/Management App",
    description:
      "Demonstrates state management (Redux), user interaction, and backend integration.",
    tech: ["MongoDB", "React", "Redux", "Node.js"],
    github: "https://github.com/SejalAgarwal12/TaskManagement-App.git",
    demo: "https://github.com/SejalAgarwal12/TaskManagement-App.git",
    image: "/images/task.jpeg",
  },
  {
    title: "BonStay Application",
    description: `A hotel booking application that allows users to browse hotels, book and manage reservations, 
      and explore reviews shared by other travelers. Users can also post their own reviews and feedback. 
      The platform includes secure authentication and authorization, ensuring personalized and protected access`,
    tech: ["React", "Node.js", "Bootstrap", "JSON-Server"],
    github: "https://github.com/SejalAgarwal12/BonStay-Application.git",
    demo: "https://github.com/SejalAgarwal12/BonStay-Application.git",
    image: "/images/bonstay.png",
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
                maxWidth: 500,        // <-- Add this
                mx: "auto",           // <-- Center the card in its grid cell
                borderRadius: 3,
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "transparent"
                    : "rgba(255, 255, 255, 0.66)",
                color: theme.palette.text.primary,
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 8px 30px rgba(0,0,0,0.4)"
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
                {project.image && (
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      borderRadius: 2,
                      mb: 2,
                    }}
                  />
                )}
                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 ,textAlign:"center",
                   fontFamily: "Roboto Slab",
                  background: "linear-gradient(90deg, #dbd6ceff, #b31515ff)", // teal to coral gradient
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
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
                      background:
                        "linear-gradient(90deg, #315e77ff, #873636ff)",
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
