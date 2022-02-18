import React from 'react';
import { graphql } from 'gatsby';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import BlogHeader from '../components/BlogHeader.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import BlogFooter from '../components/BlogFooter';

let darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

darkTheme = responsiveFontSizes(darkTheme);

const useStyles = makeStyles((theme) => ({
  cardMedia: {
    width: 180,
  },
  card: {
    display: 'flex',
    boxShadow: '2px 2px 2px rgba(209, 117, 5, 0.5)'
  },
  links: {
    textDecoration: 'none',
  },
  blogContainer: {
    marginTop: '3%',
    backgroundColor: '#212121',
    borderRadius: '5px',
    padding: '3% 3% 3% 3%'
  },
  cardContent: {
    color: 'white',
    textDecoration: 'none',
    marginTop: '2%',
    '&:hover': {
      color: '#d17505',
    },
  },
  title: {
    borderBottom: '2px solid rgba(209, 117, 5, 0.5)',
  },
}));

const Blog = ({ data }) => {
  const posts = data.blog.edges;
  const styles = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BlogHeader />
      <Container maxWidth='md' id='blog' className={styles.blogContainer}>
        <Grid container direction='column' spacing={5}>
          {posts.map(post => (
            <Grid item key={post.id}>
              <Card className={styles.card}>
                <div>
                  <Link href={`/${post.frontmatter.filepath}`} style={{ textDecoration: 'none' }}>
                    <CardContent className={styles.cardContent}>
                      <Typography variant='h5' paragraph>
                        <span className={styles.title}>{post.frontmatter.title}</span>
                      </Typography>
                      <Typography variant='caption' paragraph>
                        {post.frontmatter.date}
                      </Typography>
                      <Typography variant='subtitle1' paragraph>
                        {post.excerpt}
                      </Typography>
                    </CardContent>
                  </Link>
                </div>
                <Hidden xsDown>
                  <CardMedia className={styles.cardMedia} image={post.frontmatter.headerimage}></CardMedia>
                </Hidden>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <BlogFooter />
    </ThemeProvider>
  );
};

export default Blog;

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      edges: nodes {
        frontmatter {
          date(fromNow: true)
          title
          filepath
          headerimage
        }
        excerpt
        id
      }
    }
  }
`