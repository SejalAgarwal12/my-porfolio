import { Box, Typography, Grid, useTheme, Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiMui, SiGithub, SiPostman, SiDocker, SiFigma,  } from "react-icons/si";

const MotionBox = motion(Box);

const skillsByCategory = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 size={40} /> },
      { name: "CSS3", icon: <FaCss3Alt size={40} /> },
      { name: "Bootstrap", icon: <FaBootstrap size={40} /> },
      { name: "React", icon: <FaReact size={40} /> },
      { name: "JavaScript", icon: <FaJsSquare size={40} /> },
      { name: "Material UI", icon: <SiMui size={40} /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs size={40} /> },
      { name: "Express", icon: <SiExpress size={40} /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb size={40} /> },
      { name: "SQL/Database", icon: <FaDatabase size={40} /> },
    ],
  },
];

const CopilotIcon = () => (
  <img
    src="/copilot.png"   // save the official GitHub Copilot SVG in your public/ folder
    alt="GitHub Copilot"
    width={40}
    height={40}
    style={{borderRadius:"50%"}}
  />
)

const tools = [
  { name: "Git", icon: <SiGithub size={40} /> },
  { name: "Postman", icon: <SiPostman size={40} /> },
  { name: "Docker", icon: <SiDocker size={40} /> },
  { name: "Figma", icon: <SiFigma size={40} /> },
  { name: "GitHub Copilot", icon: <CopilotIcon /> },
];

export default function Skills() {
  const theme = useTheme();

  return (
    <Box id="skills" sx={{ py: 10, px: 2, maxWidth: 1200, mx: "auto" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          mb: 6,
          fontWeight: 800,
          fontSize: { xs: "2.5rem", md: "3rem" },
          letterSpacing: "4px",
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
        SKILLS
      </Typography>

      <Grid container spacing={{xs: 2, sm: 3, md: 4}} justifyContent="center">
        {skillsByCategory.map((category, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <Box
                sx={{
                  p: { xs: 2, md: 4 },
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
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
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
                  {category.category}
                </Typography>

                <Grid container spacing={2} justifyContent="center">
                  {category.skills.map((skill, i) => (
                    <Grid item key={i}>
                      <Tooltip title={skill.name} arrow>
                        <Box
                          sx={{
                            color: theme.palette.text.primary,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          {skill.icon}
                          <Typography
                            variant="body2"
                            sx={{ mt: 1, textAlign: "center" }}
                          >
                            {skill.name}
                          </Typography>
                        </Box>
                      </Tooltip>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </MotionBox>
          </Grid>
        ))}
      </Grid>

       <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          mt: 3,
          mb: 3,
          fontWeight: 500,
          fontSize: "1.5rem",
          letterSpacing: "2px",
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
        TOOLS & TECHNOLOGIES
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {tools.map((tool, idx) => (
          <Grid item key={idx}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Tooltip title={tool.name} arrow>
                <Box
                  sx={{
                    color: theme.palette.text.primary,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
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
                  {tool.icon}
                  <Typography variant="body2" sx={{ mt: 1, textAlign: "center" }}>
                    {tool.name}
                  </Typography>
                </Box>
              </Tooltip>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
