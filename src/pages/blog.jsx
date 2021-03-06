import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import BlogHeader from '../components/BlogHeader.jsx';
import BlogFooter from '../components/BlogFooter';
import BlogPostList from '../components/BlogPostList';
import { graphql } from 'gatsby';
import { responsiveFontSizes } from '@material-ui/core/styles';
import { StyledEngineProvider, createTheme, adaptV4Theme, ThemeProvider } from '@mui/material/styles';


let darkTheme = createTheme(adaptV4Theme({
  palette: {
    type: 'dark'
  },
}));

darkTheme = responsiveFontSizes(darkTheme);

const Blog = ({ data }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BlogHeader />
        <BlogPostList data={data}/>
        <BlogFooter />
      </ThemeProvider>
    </StyledEngineProvider>
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

