import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Social from "./Social.jsx";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
  },
  social: {
    paddingLeft: '25px'
  },
  footerBox: {
    backgroundColor: 'gray',
  }
}));

export default function Footer() {
  const styles = useStyles();
  return (
    <div className={styles.footerBox}>
      <Container maxWidth="md" component="footer" className={styles.footer}>
        <Box mt={8} mb={2} >
          <div className={styles.social}>
            <Social direction="row" />
          </div>
          <span>Copyright © 2022 David Rajec</span>
        </Box>
      </Container>
    </div>
  );
}
