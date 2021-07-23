import React from "react"

import { MinimalTable } from "./MinimalTable"
import { TableThumbnail } from "./StandardTable"
import { preferenceData, preferenceHeaders } from "./StandardTable.stories"

export default {
  title: "Tables/MinimalTable",
  decorators: [(storyFn: any) => <div style={{ padding: "1rem" }}>{storyFn()}</div>],
}

const headers = {
  name: "t.name",
  relationship: "t.relationship",
  dob: "application.household.member.dateOfBirth",
}

const data = [
  {
    name: "Jim Halpert",
    relationship: "Husband",
    dob: "05/01/1985",
  },
  {
    name: "Michael Scott",
    relationship: "Friend",
    dob: "05/01/1975",
  },
]

let i = 50
while (i > 0) {
  data.push(data[0])
  data.push(data[1])
  i--
}

export const Default = () => <MinimalTable headers={headers} data={data} />

const headersWithImage = { image: "Image", ...headers }
const dataWithImage = [...data] as any
dataWithImage[0].image = (
  <TableThumbnail>
    <img src="/images/listing.jpg" alt="listing picture" />
  </TableThumbnail>
)
dataWithImage[1].image = (
  <TableThumbnail>
    <img src="/images/logo_glyph.svg" alt="site logo" />
  </TableThumbnail>
)

export const ImageCells = () => (
  <MinimalTable
    headers={headersWithImage}
    data={dataWithImage}
    flushLeft={true}
    flushRight={true}
  />
)

export const Draggable = () => (
  <MinimalTable headers={preferenceHeaders} data={preferenceData} draggable={true} />
)

Draggable.parameters = {
  a11y: {
    config: {
      rules: [
        {
          id: "nested-interactive",
          enabled: false,
        },
      ],
    },
  },
}
