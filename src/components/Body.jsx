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
        title="Savemelee"
        img="savemelee.png"
        body="Savemelee is a fullstack application that utilizes nodejs, mongodb, and pug for server side rendering. The app acts as a hub for players of competitive Super Smash Bros. Melee to share their training mod files (aka'SAVESTATES'). Savestate and User information is stored in MongoDB while the raw savestate files are uploaded to AWS s3 buckets."
        techStack={["Node.js/Express", "Pug", "RESTful API", "AWS s3"]}
        link="https://www.savemelee.com/"
      />
      <WebCard
        title="Exotico"
        img="ExotiCo-homepage.webp"
        body="ExotiCo is a web page that I built for a local reptile education company. I created this site using React along with Material UI for simple and clean design. This company brings reptiles to birthday parties and schools to teach kids about nature preservation! "
        techStack={["React.js", "MUI", "React-Router", "Formspree"]}
        link="https://exoticocharleston.com"
      />
      <WebCard
        title="ScoreScore"
        img="scorescore.png"
        body="ScoreScore was my summer internship project with Code and Trust. This full stack application uses mySQL and node.js on the backend, and React/MUI on the frontend. This experience has taught me what it’s like to work with a team of developers, and how to overcome many challenges and tight deadlines. "
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
        body="movieSnacks is a react app that fetches movie data from the Open Movie Database API, and renders a list of movies you can select, rate, and add to your watch list. This was one of my first React projects. and realy helped me learn the fundementals within the React ecosystem."
        techStack={["React.js", "HTML", "CSS"]}
        link="https://boingloings33.github.io/movieSnacksApp/"
      />
    </Stack>
  );
}

export default Body;
