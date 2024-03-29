import { ponder } from '@/generated'

ponder.on('DNSRegistrar:Claim', async ({ event, context }) => {
  const { DnsName } = context.db
  const { dnsname: encodedName } = event.args

  const buffer = Buffer.from(encodedName.split('0x')[1], 'hex')
  const _name = buffer.toString('utf8').replace(/[\x01-\x20]/g, '.')
  const name = _name.slice(1, _name.length - 1)

  const createdAt = Number(event.block.timestamp)

  await DnsName.upsert({
    id: encodedName,
    create: { name, createdAt },
    update: { name },
  })
})

ponder.on('DNSRegistrarOld:Claim', async ({ event, context }) => {
  const { DnsName } = context.db
  const { dnsname: encodedName } = event.args

  const buffer = Buffer.from(encodedName.split('0x')[1], 'hex')
  const _name = buffer.toString('utf8').replace(/[\x01-\x20]/g, '.')
  const name = _name.slice(1, _name.length - 1)

  const createdAt = Number(event.block.timestamp)

  await DnsName.upsert({
    id: encodedName,
    create: { name, createdAt },
    update: { name },
  })
})
