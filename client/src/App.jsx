import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memoriesIMG from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memoriesIMG}
          alt="Memories"
          height="60"
        ></img>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justfy="space-between"
            alignItems="stretch"
            spacing="3"
          >
            <Grid item sx={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item sx={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
