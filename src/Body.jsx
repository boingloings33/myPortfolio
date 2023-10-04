import { Typography, Stack, Box } from "@mui/material";
import WebCard from "./components/WebCard";

function Body() {
  return (
    <Stack sx={{ mt: 8, mb: 8 }} spacing={6}>
      <Typography variant="h1"> > Projects</Typography>
      <WebCard
        title="Exotico"
        img="exotico.png"
        body="ExotiCo is a web page that I'm working on for a local reptile education company. They bring reptiles to birthday parties and schools to teach kids about nature preservation. This project is currently still in progress. "
        techStack={["React.js", "MUI", "React-Router", "Formspree"]}
        link="https://exoticocharleston.com"
      />
      <WebCard
        title="ScoreScore"
        img="scorescore.png"
        body="This was my summer internship project with Code and Trust. This experience has taught me what it’s like to work with a team of developers, and how to overcome many challenges and tight deadlines. "
        techStack={["React.ts", "MUI", "React-Query", "mySQL", "Prisma"]}
        link="https://score-score.codeandtrust.dev/"
      />
      <WebCard
        title="Binches"
        img="binches.png"
        body="Binches is a chat app that uses firebase as a database, and react on the frontend. Users can create/join a private room where others can join and chat. "
        techStack={["React.js", "MUI", "Firebase"]}
        link="https://boingloings33.github.io/binches2/"
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
