import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

import { CenterColumn, theme } from '../styles';
import { Provider, Grid } from 'reakit';
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Provider theme={theme}>
        <Grid templateRows="120px 1fr 20px" style={{ minHeight: "700px" }}>
          <Grid.Item>
            <Header siteTitle={data.site.siteMetadata.title} />
          </Grid.Item>
          <Grid.Item>
            <CenterColumn as="main">{children}</CenterColumn>
          </Grid.Item>
          <Grid.Item>
            <CenterColumn as="footer">
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </CenterColumn>
          </Grid.Item>
        </Grid>
      </Provider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
