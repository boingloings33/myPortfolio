import { Typography, Stack, useTheme, useMediaQuery } from "@mui/material";
import WebCard from "./WebCard";

function Body() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Stack sx={{ mt: 8, mb: 8, mx: { xs: 4, sm: 0 } }} spacing={6}>
      <Typography variant="h1" sx={{ fontSize: { xs: 28, sm: 40 } }}>
        > Projects
      </Typography>
      <WebCard
        title="Exotico"
        img="ExotiCo-homepage.webp"
        body="ExotiCo is a web page that I'm building on for a local reptile education company. They bring reptiles to birthday parties and schools to teach kids about nature preservation! "
        techStack={["React.js", "MUI", "React-Router", "Formspree"]}
        link="https://exoticocharleston.com"
      />
      <WebCard
        title="ScoreScore"
        img="scorescore.png"
        body="This was my summer internship project with Code and Trust. This experience has taught me what it’s like to work with a team of developers, and how to overcome many challenges and tight deadlines. "
        techStack={
          isMobile
            ? ["React.ts", "MUI", "React-Query", "mySQL"]
            : ["React.ts", "MUI", "React-Query", "mySQL", "Prisma"]
        }
        link="https://score-score.codeandtrust.dev/"
      />
      <WebCard
        title="movieSnacks"
        img="moviesnacks.png"
        body="movieSnacks is a react app that fetches movie data from the omd api and renders a list of movies you can select, rate, and add to your watch list. "
        techStack={["React.js", "HTML", "CSS"]}
        link="https://boingloings33.github.io/movieSnacksApp/"
      />
      <WebCard
        title="baioCharts"
        img="baiocharts.png"
        body="My very first personal project. It is a simple javascript/html/css application that fetches stock data from a 3rd party api, and uses a library (Chart.js) to display the data. "
        techStack={["JavaScript", "HTML", "CSS", "Chart.js"]}
        link="https://baiocharts.com/"
      />
    </Stack>
  );
}

export default Body;
