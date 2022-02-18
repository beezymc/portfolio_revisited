import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { StaticImage } from "gatsby-plugin-image";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: 'rgb(36 21 10 / 87%)',
  },
  photoContainer: {
    position: "relative"
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    zIndex: 1,
  },
  border: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    top: 10,
    left: 10,
    position: "absolute",
    border: "1px solid #d17505",
    zIndex: 0,
  },
  avatar: {
    borderRadius: "50%",
    width: 75,
    height: 75,
    textAlign: "center",
  },
  header: {
    borderBottom: '2px solid rgba(209, 117, 5, 0.5)',
    marginBottom: '2%'
  }
}));

const content = [
  'I’m passionate about taking my creative energy into building efficient and highly functional web technologies to scale.',
  'Through my experience as an editor in the publishing industry, I honed a strong attention to detail, a penchant for leadership, the capacity to meet cutthroat deadlines, and an ability to explore budding technologies.',
  'That experience also extends to authorship, through which I’ve penned one fantasy novel and am currently gathering ideas for a sci-fi epic. I’m no stranger to planning and producing creative works.',
  'More recently, I had the opportunity to work with other software engineers in various sprints to create full-stack applications. I made it a priority to solve for problems that would benefit the group as a whole, whether it be engineering how our app would manage global state, or determining how our app’s components would flow together via client-side routing. Needless to say, I’m all about leaving my collaborators with a strong, positive impression.',
];

export default function About() {
  const styles = useStyles();
  return (
    <div id="about" className={styles.container}>
      <Container maxWidth="md" >
        <Box pt={8} pb={5}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Grid item className={styles.text} sm={8}>
              <div className={styles.header}>
                <Typography component="h2" variant="h4" gutterBottom>
                  About Me
                </Typography>
              </div>
              {content.map((text) => (
                <Typography variant="subtitle1" key={text} paragraph>
                  {text}
                </Typography>
              ))}
            </Grid>
            <Hidden xsDown>
              <Grid item className={styles.photoContainer} sm={3}>
                <StaticImage
                  src='../images/david_rl.jpg'
                  alt='David Rajec profile image'
                  className={styles.photo}
                />
                <div className={styles.border}></div>
              </Grid>
            </Hidden>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
