import { createSchema } from '@ponder/core'

const schema = createSchema((p) => ({
  DnsName: p.createTable({
    id: p.string(),
    name: p.string(),
    createdAt: p.int(),
  }),
}))

export default schema
