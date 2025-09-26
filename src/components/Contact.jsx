import { Box, Typography, IconButton, useTheme, Stack } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";

export default function Contact() {
  const theme = useTheme();

  return (
    <Box id="contact" sx={{ py: 10, px: 2, maxWidth: 900, mx: "auto" }}>
      {/* Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          mb: 2,
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
        CONTACT
      </Typography>

      {/* Subheading */}
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mb: 6,
          color:
            theme.palette.mode === "dark"
              ? "rgba(200,200,200,0.8)"
              : theme.palette.text.secondary,
        }}
      >
        Let’s connect and collaborate 🚀
      </Typography>

      {/* Contact Details: Mail left, Icons right */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: { xs: 1, md: 4 } }}
      >
        {/* Email */}
        <Stack direction="row" spacing={1} alignItems="center">
  <Email sx={{ color: theme.palette.text.primary }} /> {/* now inherits */}
  <Typography
    variant="body1"
    component="a"
    href="mailto:sejal1999.ag@gmail.com"
    sx={{
      textDecoration: "none",
      color: theme.palette.text.primary,
      "&:hover": { textDecoration: "underline" },
    }}
  >
    sejal1999.ag@gmail.com
  </Typography>
</Stack>

        {/* GitHub + LinkedIn */}
        <Stack direction="row" spacing={2}>
          <IconButton
            component="a"
            href="https://github.com/SejalAgarwal12"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.text.primary }}
          >
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton
            component="a"
            href="http://linkedin.com/in/sejal-agarwal-8a101716b"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.text.primary }}
          >
            <LinkedIn fontSize="large" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
