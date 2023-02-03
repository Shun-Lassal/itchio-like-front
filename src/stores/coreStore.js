import { defineStore } from "pinia";
import axios from "axios";

export const useCoreStore = defineStore({
  id: "coreStore",
  state: () => ({
    // thomas: "ThomasIs",
    // shun: "ShunIs",
    // joris: "JorisIs",
    token: undefined,
    formLogin: {
      email: "",
      password: "",
    },
    formRegister: {
      email: "",
      password: "",
    },
  }),
  actions: {
    async login() {
      const { data } = await axios.post(
        "http://192.168.78.150:8080/auth/login",
        this.formLogin
      );
      if (data && data.result) {
        localStorage.setItem("token", data.result);
        this.token = data.result;
      }
    },
    async setToken() {
      if (localStorage.getItem("token")) {
        this.token = localStorage.getItem("token");
      }
    },
    // async register(user) {
    //   const data = await axios.post("/auth/register", {
    //       this.formRegister
    //     })

    //     if(data){

    //     }

    //       localStorage.setItem("token", response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
    // async getAllUser(user) {
    //   axios
    //     .get("/users/", {
    //       user,
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
  },
});
