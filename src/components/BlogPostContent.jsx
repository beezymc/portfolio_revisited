import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@mui/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    marginTop: '3%',
    padding: '4% 4% 4%',
    paddingBottom: '1%',
    borderRadius: '5px',
    backgroundColor: '#212121',
    color: 'white',
  },
  cardContent: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: '#d17505',
    },
  },
  title: {
    textAlign: 'center',
    fontWeight: '900',
    paddingBottom: '2%',
  },
  titleBorder: {
    borderBottom: '2px solid rgba(209, 117, 5, 0.5)',
  },
  datetime: {
    textAlign: 'center',
    paddingBottom: '2%'
  },
  headerContainer: {
    height: '40vh'
  },
  headerImage: {
    height: '100%',
    width: '100%',
    objectFit: 'contain'
  },
  blogButton: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '4%',
    marginTop: '4%'
  },
  bodyText: {
    lineHeight: '2em'
  },
  blogBackground: {
    backgroundColor: 'gray',
    height: '100%',
    width: '100vw',
    zIndex: '-1',
    paddingTop: '2%',
  }
}));

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  const styles = useStyles();
  return (
    <div className={styles.blogBackground}>
      <Container maxWidth='md' id='blog' className={styles.blogContainer}>
        <Box>
          <Typography variant='h5' className={styles.title}>
            <span className={styles.titleBorder}>{post.frontmatter.title}</span>
          </Typography>
          <div className={styles.datetime}>
            {post.frontmatter.date}
          </div>
          <div className={styles.headerContainer}>
            <img src={post.frontmatter.headerimage} className={styles.headerImage} alt='Blog Header'/>
          </div>
          <Typography paragraph>
            <span className={styles.bodyText} dangerouslySetInnerHTML={{ __html: post.html }} />
          </Typography>
        </Box>
        <div className={styles.blogButton}>
          <Button href='/blog' variant='outlined'>
            View More Posts
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default BlogPost;