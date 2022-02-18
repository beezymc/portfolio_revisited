import React from 'react';
import { graphql } from 'gatsby';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import BlogHeader from '../components/BlogHeader.jsx';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BlogFooter from '../components/BlogFooter';
import Button from '@material-ui/core/Button';

let darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

darkTheme = responsiveFontSizes(darkTheme);

const useStyles = makeStyles((theme) => ({
  blogContainer: {
    marginTop: '3%',
    padding: '4% 4% 4%',
    paddingBottom: '1%',
    borderRadius: '5px',
    backgroundColor: '#212121',
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
  }
}));

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  const styles = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BlogHeader />
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
            <div className={styles.bodyText} dangerouslySetInnerHTML={{ __html: post.html }} />
          </Typography>
        </Box>
        <div className={styles.blogButton}>
          <Button href='/blog' variant='outlined'>
            View More Posts
          </Button>
        </div>

      </Container>
      <BlogFooter />
    </ThemeProvider>
  );
};

export default BlogPost;

export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(fromNow: true)
        headerimage
      }
    }
  }
`