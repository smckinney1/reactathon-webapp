import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GroceryList from '../components/GroceryList'

const IndexPage = () => (
  <Layout>
    <SEO title="Shopping" keywords={[`gatsby`, `application`, `react`]} />
    <GroceryList listId="workshopList" />
  </Layout>
)

export default IndexPage
