import { defineStore } from "pinia";
import { secureAxios } from "../utils/http";

export const usePoopStore = defineStore({
  id: "poopStore",
  state: () => ({
    config: {},
    objReviews: {
      1: {
        positiveReview: true,
        timePlayed: 461,
        time2LastWeeks: 15,
        textReview:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestias repellat in enim dicta doloremque facilis soluta iure sapiente, perspiciatis similique itaque nihil corrupti optio aspernatur quo, asperiores tempora voluptates!",
        reviewerPicUrl: "https://picsum.photos/200",
        reviewerName: "LeZouzouDu81",
      },
      2: {
        positiveReview: false,
        timePlayed: 461,
        time2LastWeeks: 15,
        textReview:
          "JEU TROP COOL J'ADORE LES ANIMATIONS GG AUX DEVELOPPEURS !!!",
        reviewerPicUrl: "https://picsum.photos/200",
        reviewerName: "LeZouzouDu81",
      },
      3: {
        positiveReview: false,
        timePlayed: 461,
        time2LastWeeks: 15,
        textReview:
          "JEU TROP COOL J'ADORE LES ANIMATIONS GG AUX DEVELOPPEURS !!!",
        reviewerPicUrl: "https://picsum.photos/200",
        reviewerName: "LeZouzouDu81",
      },
      4: {
        positiveReview: true,
        timePlayed: 461,
        time2LastWeeks: 15,
        textReview:
          "JEU TROP COOL J'ADORE LES ANIMATIONS GG AUX DEVELOPPEURS !!!",
        reviewerPicUrl: "https://picsum.photos/200",
        reviewerName: "LeZouzouDu81",
      },
      5: {
        positiveReview: true,
        timePlayed: 461,
        time2LastWeeks: 15,
        textReview:
          "JEU TROP COOL J'ADORE LES ANIMATIONS GG AUX DEVELOPPEURS !!!",
        reviewerPicUrl: "https://picsum.photos/200",
        reviewerName: "LeZouzouDu81",
      },
    },
    dataReq: [],
    allGamesInfos: [],
    aGameInfos: [],
    api: "https://api.rawg.io/api/",
    apiKey: `key=f9ffe099be0a466eb8f7ff46f77e5a20`,
    categoryList: [],
    platformsList: [],
    searchInput: "",
    categoryInput: "",
    platformInput: "",
  }),
  actions: {
    async getGamesInfos() {
      const { data } = await secureAxios.get(
        `https://api.rawg.io/api/games?search=&search_precise=true&search_exact=true&ordering=-rating&exclude_additions=true&page=1&${this.apiKey}`
      );
      this.allGamesInfos = data.results;
      console.log(data);
    },

    async getAGameInfos(gameId) {
      const { data } = await secureAxios.get(
        `https://api.rawg.io/api/games/${gameId}?${this.apiKey}`
      );
      this.aGameInfos = await data;
    },

    async fetchGamesBySearch(
      searchInput,
      categoryInput,
      platformInput,
      page = 1
    ) {
      var categ = "";
      var platf = "";
      var pageP = "";
      if (categoryInput != "") {
        categ = "&genres=" + this.categoryInput;
      }

      if (platformInput != "") {
        platf = "&platforms=" + this.platformInput;
      }

      if (page > 1) {
        pageP = "&page=" + page;

        var buffer = await this.getApiList(
          this.api,
          "games",
          "search=" +
            searchInput +
            `&ordering=-rating&search_precise=true` +
            categ +
            platf +
            pageP,
          this.apiKey
        );

        buffer.forEach((element) => {
          this.allGamesInfos.push(element);
        });

        console.log(this.allGamesInfos);
      } else {
        this.allGamesInfos = await this.getApiList(
          this.api,
          "games",
          "search=" +
            searchInput +
            `&ordering=-rating&search_precise=true` +
            categ +
            platf,
          this.apiKey
        );
      }
      console.log(
        this.api +
          "games" +
          "?search=" +
          searchInput +
          `&search_precise=true&search_exact=true&ordering=-rating&exclude_additions=true` +
          categ +
          platf +
          pageP,
        this.apiKey
      );
    },

    async fetchGameNextPage() {},

    async fetchPlatforms() {
      this.platformsList = await this.getApiList(
        this.api,
        "platforms",
        "",
        this.apiKey
      );
      console.log(this.platformsList);
    },

    async fetchGenres() {
      this.categoryList = await this.getApiList(
        this.api,
        "genres",
        "",
        this.apiKey
      );
      console.log(this.categoryList);
    },

    async getApiList(apiLink, route, queries, apiKey) {
      if (queries == "") {
        var link = apiLink + route + "?" + apiKey;
      } else {
        var link = apiLink + route + "?" + queries + "&" + apiKey;
      }

      const { data } = await secureAxios.get(link);
      if (data.results) {
        this.dataReq = data;
        console.log(await data.results);
        return data.results;
      } else {
        console.log("getApiList function, no data.results");
      }
    },

    async getApiId(api, route, id, queries, apiKey) {
      var link = api + route + "/" + id;
    },
  },
});
