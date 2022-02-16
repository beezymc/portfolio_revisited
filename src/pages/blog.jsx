import React from "react";
import { graphql } from "gatsby";
import { createTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header.jsx';

let darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

darkTheme = responsiveFontSizes(darkTheme);

const Blog = ({ data }) => {
  console.log(data);
  const posts = data.blog.edges;

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <div>
        <h1>My blog posts</h1>
        {posts.map(post => (
          <article key={post.id}>
            <h2>{post.frontmatter.title}</h2>
            <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
            <p>{post.excerpt}</p>
          </article>
        ))}
    </div>
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
          author
        }
        excerpt
        id
      }
    }
  }
`