import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Social from "./Social.jsx";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  social: {
    paddingLeft: '14px'
  }
}));

export default function Footer() {
  const styles = useStyles();
  return (
    <Container maxWidth="md" component="footer" className={styles.footer}>
      <Box mt={8} mb={2} >
        <div className={styles.social}>
          <Social direction="row" />
        </div>
        <span>Copyright © 2022 David Rajec</span>
      </Box>
    </Container>
  );
}
