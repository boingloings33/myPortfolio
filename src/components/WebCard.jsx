import {
  Typography,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

function WebCard({ title, body, techStack, img, link }) {
  return (
    <Card elevation={6}>
      <CardActionArea href={link} target="_blank">
        <Stack direction="row">
          <CardMedia
            image={img}
            sx={{
              width: 260,
            }}
          />
          <CardContent sx={{ width: "100%" }}>
            <Stack spacing={1}>
              <Typography variant="h3" fontWeight={700}>
                {title}
              </Typography>
              <Typography variant="body1">{body}</Typography>
              <Stack direction="row" spacing={1}>
                {techStack.map((item) => (
                  <Typography
                    fontSize={12}
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
