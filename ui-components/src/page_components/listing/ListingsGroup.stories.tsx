import * as React from "react"

import { ListingsGroup } from "./ListingsGroup"

export default {
  title: "Listing/Listing Group",
}

export const showListingsGroup = () => {
  return <ListingsGroup listings={[]} header="Header" showButtonText="Show" hideButtonText="Hide" />
}
