import {
  Typography,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  useTheme,
  useMediaQuery,
} from "@mui/material";

function WebCard({ title, body, techStack, img, link }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Card elevation={6} sx={{ backgroundColor: "primary.light" }}>
      <CardActionArea href={link} target="_blank">
        <Stack direction={!isMobile ? "row" : "column"}>
          <CardMedia
            image={img}
            sx={{
              width: { xs: "100%", sm: 260 },
              height: { xs: 190, sm: "auto" },
            }}
          />
          <CardContent sx={{ width: "100%" }}>
            <Stack spacing={1}>
              <Typography variant="h3" fontWeight={700}>
                {title}
              </Typography>
              <Typography
                variant="body1"
                fontSize={isMobile && 12}
                sx={{ width: { xs: "90%", sm: "100%" } }}
              >
                {body}
              </Typography>
              <Stack direction="row" spacing={1}>
                {techStack.map((item) => (
                  <Typography
                    fontSize={!isMobile ? 12 : 8}
                    key={item}
                    sx={{
                      backgroundColor: "secondary.main",
                      width: "fit-content",
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </CardContent>
        </Stack>
      </CardActionArea>
    </Card>
  );
}

export default WebCard;
