import { defineStore } from "pinia";
import { secureAxios } from "../utils/http";

export const usePoopStore = defineStore({
  id: "poopStore",
  state: () => ({
    config: {},
    igdb_url: "https://api.igdb.com/v4/games",
    client_id: "c77vhqg06a3xwfbj8f12go5qelh85d",
    client_secret: "3j6untxxr8c0b3dejxr7t92525a0xt",
    objResponse: {
      1: {
        name: "Last Oasis",
        pictureUrl:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/903950/header.jpg?t=1664882072",
        categories: ["MMO", "Survie"],
        price: "5",
      },
      2: {
        name: "Dark and Darker",
        pictureUrl:
          "https://cdn.akamai.steamstatic.com/steam/apps/2016590/header.jpg?t=1675686408",
        categories: ["Dungeon", "Adventure"],
        price: "0",
      },
      3: {
        name: "Elder Scrolls Online",
        pictureUrl:
          "https://cdn.akamai.steamstatic.com/steam/apps/306130/header.jpg?t=1674679947",
        categories: ["MMO", "RPG"],
        price: "19,99",
      },
      4: {
        name: "Rust",
        pictureUrl:
          "https://cdn.akamai.steamstatic.com/steam/apps/252490/header.jpg?t=1671160999",
        categories: ["Survie", "Weird"],
        price: "25,99",
      },
      5: {
        name: "Barotrauma",
        pictureUrl:
          "https://cdn.akamai.steamstatic.com/steam/apps/602960/header.jpg?t=1675176455",
        categories: ["Dungeon", "Exploration"],
        price: "10",
      },
      6: {
        name: "Terraria",
        pictureUrl:
          "https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg?t=1666290860",
        categories: ["Adventure", "Exploration", "Survie"],
        price: "9,99",
      },
      7: {
        name: "Factorio",
        pictureUrl:
          "https://cdn.akamai.steamstatic.com/steam/apps/427520/header.jpg?t=1664264081",
        categories: ["Builder", "Survie"],
        price: "20,99",
      },
      8: {
        name: "Rimworld",
        pictureUrl:
          "https://cdn.akamai.steamstatic.com/steam/apps/294100/header.jpg?t=1674495375",
        categories: ["Builder", "RPG"],
        price: "20,99",
      },
    },
  }),
  actions: {
    async callTwitchApi() {
      const { data } = await secureAxios.post(
        `https://id.twitch.tv/oauth2/token?client_id=${this.client_id}&client_secret=${this.client_secret}&grant_type=client_credentials`
      );
      if (data) {
        console.log(data);
      }
    },
  },
});
