import { ponder } from "@/generated";

ponder.on("DNSRegistrar:Claim", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on("DNSRegistrar:NewOracle", async ({ event, context }) => {
  console.log(event.params);
});
