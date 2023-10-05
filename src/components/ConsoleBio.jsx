import {
  Typography,
  Stack,
  Box,
  Link,
  Button,
  Snackbar,
  IconButton,
  Card,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

function ConsoleBio() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  function handleEmailClicked() {
    navigator.clipboard.writeText("baiolemi@gmail.com");
    setOpen(true);
  }
  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={
          <Typography sx={{ color: "primary.light" }}>
            Copied to clipboard!
          </Typography>
        }
        action={
          <IconButton onClick={handleClose} sx={{ color: "primary.light" }}>
            <CloseIcon />
          </IconButton>
        }
      />
      <Card
        elevation={6}
        sx={{
          p: 2,
          pt: 6,
          backgroundColor: "primary.dark",
          borderRadius: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "4px 4px 0 0",
            backgroundColor: "info.main",
            width: "100%",
            height: 30,
          }}
        >
          <Stack
            spacing={1}
            direction="row"
            justifyContent="end"
            sx={{ mt: 0.2, mr: 1 }}
          >
            <RemoveIcon sx={{ color: "white" }} />
            <CropSquareIcon sx={{ color: "white" }} />
            <CloseIcon sx={{ color: "white" }} />
          </Stack>
        </Box>
        <Typography sx={{ color: "white" }}>
          > Brenden.currentLocation
        </Typography>
        <Typography sx={{ color: "secondary.light", mb: 2 }}>
          "Mount Pleasant, SC"
        </Typography>
        <Typography sx={{ color: "white" }}>> Brenden.contactInfo</Typography>
        <Stack direction={!isMobile ? "row" : "column"} alignItems="start">
          <Typography sx={{ color: "secondary.dark", mb: { xs: 0, sm: 2 } }}>
            [
          </Typography>
          <Button
            onClick={handleEmailClicked}
            sx={{
              p: 0,
              m: 0,
              height: "fit-content",
              backgroundColor: "transparent",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <Typography
              sx={{
                color: "secondary.dark",
                "&:hover": { color: "secondary.main" },
                mr: 1,
              }}
            >
              "baiolemi@gmail.com",
            </Typography>
          </Button>
          <Link
            href="https://github.com/boingloings33"
            underline="none"
            target="_blank"
          >
            <Typography
              sx={{
                color: "secondary.dark",
                "&:hover": { color: "secondary.main" },
                mr: 1,
              }}
            >
              "gitHub",
            </Typography>
          </Link>
          <Link
            href="https://www.linkedin.com/in/brenden33/"
            underline="none"
            target="_blank"
          >
            <Typography
              sx={{
                color: "secondary.dark",
                "&:hover": { color: "secondary.main" },
              }}
            >
              "LinkedIn"
            </Typography>
          </Link>
          <Typography sx={{ color: "secondary.dark" }}>]</Typography>
        </Stack>
        <Typography sx={{ color: "white" }}>> Brenden.skills</Typography>
        <Typography sx={{ color: "secondary.light", mb: 2 }}>
          ["JavaScript", "HTML", "CSS", "React", "MUI", "Firebase", "gitHub"]
        </Typography>
        <Typography sx={{ color: "white" }}>> Brenden.hobbies</Typography>
        <Typography sx={{ color: "secondary.light", mb: 2 }}>
          ["videogames", "guitar", "bartending" ]
        </Typography>
        <Typography sx={{ color: "white" }}>></Typography>
      </Card>
    </>
  );
}

export default ConsoleBio;
