<template>
  <v-expansion-panels flat v-model="panel" multiple>
    <v-expansion-panel v-for="(item, i) in faqList" :key="i">
      <v-expansion-panel-header expand-icon="mdi-menu-down">
        <span class="fs-font custom-header">{{ item.header }}</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ item.content }}
      </v-expansion-panel-content>
      <v-divider></v-divider>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
export default {
  name: "FAQ",
  data() {
    return {
      panel: [0, 1, 2],
      faqList: [
        {
          header: "HOW CAN I PURCHASE THE FORTNITE CREW SUBSCRIPTION?",
          content:
            "The Fortnite Crew subscription can be purchased directly from the Item Shop or Battle Pass purchase screen.",
        },
        {
          header: "WHAT’S IN A CREW PACK?",
          content:
            "Monthly Crew Packs always contain a new Outfit along with at least one accessory. All items are exclusive to Fortnite Crew members.",
        },
        {
          header: "CAN I STILL PURCHASE A BATTLE BUNDLE?",
          content:
            "The Battle Bundle has been replaced by a bundle of 25 levels, available for 1,850 V-Bucks. The offer is available to players at level 75 or lower at any time, once per season. This bundle can be packaged together when buying the standard Battle Pass by itself, or purchased after buying the standalone Battle Pass or acquiring it as a member of Fortnite Crew.",
        },
        {
          header: "ONCE I’M SUBSCRIBED, HOW DO I GET MY ITEMS EACH MONTH?",
          content:
            "Your Subscription is associated with the platform on which you purchased it (your “Primary Platform”) until it is cancelled and is not transferable. Be sure to choose the platform (e.g., Xbox, PlayStation, Switch) you purchase your Subscription on carefully. You’ll be able to access the items you receive from the Subscription across different platforms, but the V-Bucks you receive may not be redeemable on other platforms. You must log into your Primary Platform each monthly subscription period to access your Subscription Content.",
        },
        {
          header: "WHEN IS MY NEXT V-BUCKS OR CREW PACK GRANT?",
          content:
            "Please refer to the Fortnite Crew in-game tab to see your next V-Bucks or Crew Pack grant which is delivered monthly.",
        },
        {
          header: "ARE MY V-BUCKS BOUND TO THE PLATFORM I PURCHASE THEM ON?",
          content:
            "V-Bucks purchased on PlayStation or Nintendo Switch cannot be spent on other platforms. Any Fortnite content you buy with your V-Bucks will be available on every device linked to your Fortnite account, regardless of which device the content was bought on.",
        },
        {
          header: "HOW CAN I CANCEL MY FORTNITE CREW SUBSCRIPTION?",
          content:
            "You can also cancel your Fortnite Crew subscription at any time. Go directly in-game and check out the Fortnite Crew tab to guide you based on your active game device. Even after cancelling, your membership will remain effective until the end of your current billing period. You will keep all previously awarded Battle Passes, V-Bucks, and Crew Packs. Subscribed to Fortnite Crew through your Xbox account and would like to cancel? Learn more about Xbox cancellation steps.",
        },
        {
          header:
            "WHAT HAPPENS IF I ALREADY PURCHASED THE CURRENT SEASON’S BATTLE PASS OR ITEMS IN THE CREW PACK PRIOR TO SUBSCRIBING TO FORTNITE CREW?",
          content:
            "If you already purchased the current season’s Battle Pass, a one-time 950 V-Bucks return will be applied to your account.",
        },
        {
          header: "WHAT DOES IT MEAN THAT CREW PACKS ARE EXCLUSIVE?",
          content:
            "Crew Packs and the items they contain are only available to Fortnite Crew subscribers. Previously released items may be made available again to Crew members at a later date. They will never be sold to non-Crew members or given away to non-Crew members.",
        },
        {
          header: "WHY CAN’T I SEE FORTNITE CREW IN THE GAME?",
          content:
            "If you're unable to see the Fortnite Crew option in-game starting December 2nd, your platform, country (or combination of both) or available payment methods may not be supported at this time. We'll keep working on adding more options as time goes on.",
        },
        {
          header: "HOW DO I UPDATE MY BILLING INFORMATION FOR MY SUBSCRIPTION?",
          content:
            "Refer to the billing instructions from your platform of choice. If you subscribed on PC or Android, you may update your billing information in the Subscription section.",
        },
      ],
    };
  },
  created() {
    this.allOpen();
  },
  methods: {
    allOpen() {
      this.panel = [...this.faqList.keys()].map((v, i) => i);
    },
  },
};
</script>
<style lang="scss" scoped>
.custom-header {
  font-size: 1.2em;
  color: rgb(0, 198, 255);
}
</style>
