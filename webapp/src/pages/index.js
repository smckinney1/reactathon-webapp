import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GroceryList from '../components/GroceryList'

const IndexPage = () => (
  <Layout>
    <SEO title="🛒" keywords={[`gatsby`, `application`, `react`]} />
    <GroceryList
      listId="workshopList"
      initialState={{
        listName: 'Workshop',
        groceryList: [
          { itemName: 'pizza', done: true, key: 'temp1' },
          { itemName: 'beer', done: false, key: 'temp2' },
        ]
      }}
    />
  </Layout>
)

export default IndexPage
