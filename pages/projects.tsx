import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import React from "react";
import { Link as MUILink } from "@mui/material";

const Projects = () => {
  const theme = useTheme();
  const { push } = useRouter();
  return (
    <Box
      width="100%"
      height="100%"
      gap="10px"
      display="flex"
      // justifyContent="center"
      alignItems="center"
      flexDirection="column"
      padding="10px"
      overflow="auto"
      sx={{ marginTop: { xs: "0", sm: "50px" } }}
    >
      <Box
        width="100%"
        // margin="50px 0 10px 0"
        padding="10px"
        borderBottom="1px solid #3C1B6D"
      >
        <Typography color="text.primary" variant="h2">
          <Box sx={{ textAlign: "center" }}>Projects</Box>
        </Typography>
      </Box>
      <Card sx={{ display: "flex", width: { md: "100%", lg: "70%" } }}>
        <CardMedia
          component="img"
          sx={{ width: { xs: "120px", md: "200px" } }}
          image="/images/berdal.png"
          alt="berdal-todo"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: "200px",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              PERSONAL WEBSITE
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Next.js Typescript material-ui material-icons Prisma Supabase
              Postgres nextauth nodemailer notistack react-hook-form Axios
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
              gap: "10px",
            }}
          >
            <MUILink
              sx={{ cursor: "pointer" }}
              color={theme.palette.secondary.main}
              href="https://github.com/bunyaminerdal/berdal"
              target="_blank"
            >
              <Typography>{"Github"}</Typography>
            </MUILink>
            <MUILink
              sx={{ cursor: "pointer" }}
              color={theme.palette.secondary.main}
              href="https://bunyaminerdal.com.tr"
              target="_blank"
            >
              <Typography>{"Visit"}</Typography>
            </MUILink>
          </Box>
        </Box>
      </Card>
      <Card sx={{ display: "flex", width: { md: "100%", lg: "70%" } }}>
        <CardMedia
          component="img"
          sx={{ width: { xs: "120px", md: "200px" } }}
          image="/images/berdal-todo.png"
          alt="berdal-todo"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minWidth: "200px",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              TODO APP
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Next.js Typescript Tailwind.css Prisma Supabase Postgres
              react-icons Axios react-hook-form
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
              gap: "10px",
            }}
          >
            <MUILink
              sx={{ cursor: "pointer" }}
              color={theme.palette.secondary.main}
              href="https://github.com/bunyaminerdal/berdal-todo-app"
              target="_blank"
            >
              <Typography>{"Github"}</Typography>
            </MUILink>
            <MUILink
              sx={{ cursor: "pointer" }}
              color={theme.palette.secondary.main}
              href="https://todo.bunyaminerdal.com.tr"
              target="_blank"
            >
              <Typography>{"Visit"}</Typography>
            </MUILink>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
Projects.auth = {
  role: null,
  needAuth: false,
  unAuthorizedUrl: "/",
  loading: <div>Loading...</div>,
};

export default Projects;
