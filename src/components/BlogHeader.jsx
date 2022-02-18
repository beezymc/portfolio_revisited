import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/hidden';

const useStyles = makeStyles((theme) => ({
  link: {
    marginRight: 20,
    '&:hover': {
      color: '#d17505'
    }
  },
  avatar: {
    marginRight: 'auto',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: 0,
    height: 30,
    border: '2px solid gray',
    width: 80,
    borderLeft: '12px solid transparent',
    borderRight: '12px solid transparent',
  },
  homeButton: {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: '#d17505'
    }
  },
  resumeButton: {
    marginRight: 20,
  },
  titleBox: {
    textAlign: 'center',
    margin: 'auto',
    paddingRight: '50px'
  }
}));
const Header = () => {
  const styles = useStyles();
  return (
    <AppBar position='sticky' color='default'>
      <Container maxWidth='md'>
        <ToolBar disableGutters>
          <Avatar className={styles.avatar}><a className={styles.homeButton} href='/'>{"<D />"}</a></Avatar>
          <Hidden xsDown>
            <Box className={styles.titleBox}>
              <Typography component='h1' variant='h4'>
                David's Deliberations
              </Typography>
            </Box>
          </Hidden>
          <Button className={styles.resumeButton} href='mailto:david.rajec@gmail.com' variant='outlined' color='secondary'>
            Get in Touch!
          </Button>
        </ToolBar>
      </Container>
    </AppBar>
  );
};

export default Header;