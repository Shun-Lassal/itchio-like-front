import { defineStore } from "pinia";
import axios from "axios";
import http from "../utils/http";
import { isTagName } from "windicss/utils";

export const useCoreStore = defineStore({
  id: "coreStore",
  state: () => ({
    user: undefined,
    payload: undefined,
    token: undefined,
    formLogin: {
      email: "",
      password: "",
    },
    formRegister: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  }),
  actions: {
    async login() {
      const { data } = await axios.post(
        `${http.BASE_URL}/auth/login`,
        this.formLogin
      );
      if (data && data.result && data.payload) {
        localStorage.setItem("token", data.result);
        localStorage.setItem("payload", data.payload);

        this.token = data.result;
        this.payload = data.payload;
      }
    },

    async getUserInfos() {
      const config = {
        headers: { Authorization: `Bearer ${this.token}` },
      };

      const { data } = await axios.get(
        `${http.BASE_URL}/users/${this.payload}`,
        config
      );
      console.log(data, "axios request");
      this.user = data;
    },

    async setToken(callback) {
      if (localStorage.getItem("token")) {
        this.token = localStorage.getItem("token");

        if (!this.token || this.token.length < 1) {
          callback();
        }
      }
    },

    async setPayload() {
      if (localStorage.getItem("payload")) {
        this.payload = localStorage.getItem("payload");
        return this.payload;
      }
    },

    async register() {
      if (this.formRegister.password === this.formRegister.confirmPassword) {
        const data = await axios.post(`${http.BASE_URL}/auth/register`, {
          email: this.formRegister.email,
          password: this.formRegister.password,
        });
        console.log(data, "result register");
      } else {
        console.log("confirm password incorrect");
      }
    },

    // async updateProfil() {},
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
