import React from 'react';
import { graphql } from 'gatsby';
import CssBaseline from '@material-ui/core/CssBaseline';
import BlogHeader from '../components/BlogHeader.jsx';
import BlogFooter from '../components/BlogFooter.jsx';
import BlogPostContent from '../components/BlogPostContent.jsx';
import { responsiveFontSizes } from '@material-ui/core/styles';
import { StyledEngineProvider, createTheme, adaptV4Theme, ThemeProvider } from '@mui/material/styles';


let darkTheme = createTheme(adaptV4Theme({
  palette: {
    type: 'dark'
  },
}));
darkTheme = responsiveFontSizes(darkTheme);

const BlogPost = ({ data }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BlogHeader />
        <BlogPostContent data={data} />
        <BlogFooter />
      </ThemeProvider>
    </StyledEngineProvider>
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