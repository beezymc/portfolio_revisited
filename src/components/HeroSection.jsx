import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Social from './Social.jsx';
import Hidden from '@material-ui/core/hidden';
import Zoom from '@material-ui/core/Zoom';
import { StaticImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme) => ({
  section: {
    height: '90vh',
    position: 'relative'
  },
  content: {
    height: '100%',
    zIndex: '100',
    position: 'relative',
  },
  container: {
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: '2',
  },
  heroImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: '1',
  }
}));

const HeroSection = () => {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setShouldShow(true);
  }, []);

  return (
    <Paper className={styles.section} id='about'>
      <StaticImage
        className={styles.heroImage}
        src='https://images.unsplash.com/photo-1519895710315-a04b64f04a36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      />
      <div className={styles.overlay} />
      <Container maxWidth='md' className={styles.container}>
        <Grid container
          justifyContent='space-between'
          alignItems='center'
          className={styles.content}
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography component='h1' variant='h3'>
                Hi, my name is David! I'm a software engineer.
              </Typography>
              <Typography variant='h5'>
                I build websites, web applications, and responsive components
              </Typography>
              <Box my={2}>
                <Button href='mailto:david.rajec@gmail.com' variant='outlined' color='secondary'>
                  Get in Touch!
                </Button>
              </Box>
            </Grid>
          </Zoom>
          <Hidden xsDown>
            <Grid item>
              <Social direction={'column'}/>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Paper>
  );
};

export default HeroSection;