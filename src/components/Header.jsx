import React, { useState } from 'react';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/ToolBar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';

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
    <AppBar enableColorOnDark position='sticky' color='default'>
      <Container maxWidth='md'>
        <ToolBar disableGutters>
          <Avatar className={styles.avatar}><a className={styles.homeButton} href='#home'>{"<D />"}</a></Avatar>
          <Container sx={{ display: { xs: 'none', md: 'block' }}}>
            {navigationLinks.map((item, index) => (
              <Link
                sx={{ display: { xs: 'none', md: 'block' }}}
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
            <Button sx={{ display: { xs: 'none', md: 'block' }}} className={styles.resumeButton} href='/David Rajec Resume.pdf' variant='outlined' color='secondary'>
              Resume
            </Button>
          </Container>

          <IconButton onClick={() => setOpen(true)} sx={{ display: { xs: 'block', md: 'none' }}}>
            <MenuIcon sx={{ display: { xs: 'block', md: 'none'}}}/>
          </IconButton>
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