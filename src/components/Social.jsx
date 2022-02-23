import React from 'react';
import Github from '@mui/icons-material/Github';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

const socialItems = [
  {icon: Github, url: 'https://github.com/beezymc'},
  {icon: Twitter, url: 'https://twitter.com/drajec'},
  {icon: LinkedIn, url: 'https://www.linkedin.com/in/davidrajec/'}
];

const Social = ({ direction }) => {
  return (
    <div>
      <Grid container direction={direction || 'row'} spacing={1}>
        {socialItems.map((item, index) => (
          <Grid item key={index}>
            <Link href={item.url} target="_blank">
              <IconButton>
                <item.icon />
              </IconButton>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Social;