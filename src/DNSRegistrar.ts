import { ponder } from '@/generated'

ponder.on('DNSRegistrar:Claim', async ({ event, context }) => {
  const { DnsName } = context.entities
  const { dnsname: encodedName } = event.params

  const buffer = Buffer.from(encodedName.split('0x')[1], 'hex')
  const name = buffer.toString('utf8')

  await DnsName.upsert({
    id: encodedName,
    create: { name },
    update: { name },
  })
})
