import React from 'react';
import Github from '@material-ui/icons/Github';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const socialItems = [
  {icon: Github, url: ''},
  {icon: Twitter, url: ''},
  {icon: LinkedIn, url: ''}
];

const Social = ({ direction }) => {
  return (
    <div>
      <Grid container direction={direction || 'row'} spacing={1}>
        {socialItems.map((item) => (
          <Grid item>
            <Link href={item.url}>
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