import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

const navigationLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '/blog'},
];

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
    marginRight: 20
  }
}));

const Header = () => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky' color='default'>
      <Container maxWidth='md'>
        <ToolBar disableGutters>
          <Avatar className={styles.avatar}><a className={styles.homeButton} href='#home'>{"<D />"}</a></Avatar>
          <Hidden xsDown>
            {navigationLinks.map((item, index) => (
              <Link
                className={styles.link}
                color='textPrimary'
                variant='button'
                underline='none'
                href={item.href}
                key={index}
              >
                {item.name}
              </Link>
            ))}
            <Button className={styles.resumeButton} href='/David Rajec Resume.pdf' variant='outlined' color='secondary'>
              Resume
            </Button>
          </Hidden>
          <Hidden smUp>
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
          </Hidden>
        </ToolBar>
      </Container>
      <SwipeableDrawer anchor='right' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <div>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item, index) => (
            <ListItem key={index}>
              <Link
                className={styles.link}
                color='textPrimary'
                variant='button'
                underline='none'
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
          <ListItem>
            <Button href='/David Rajec Resume.pdf' variant='outlined' color='secondary'>
              Resume
            </Button>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Header;