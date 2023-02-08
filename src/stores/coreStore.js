import { defineStore } from "pinia";
// import axios from "axios";
import { secureAxios } from "../utils/http";

export const useCoreStore = defineStore({
  id: "coreStore",
  state: () => ({
    session: {
      userId: undefined,
      userToken: undefined,
      userDetail: undefined,
    },
    forms: {
      login: {
        email: undefined,
        password: undefined,
      },
      register: {
        email: undefined,
        password: undefined,
      },
    },
    user: undefined,
    infoUserToSet: {},
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
      const { data: loginData } = await secureAxios.post(
        "auth/login",
        this.formLogin
      );

      if (loginData) {
        localStorage.setItem("session_user_id", loginData.result.id);
        localStorage.setItem("session_user_token", loginData.result.token);

        this.session.userId = loginData.result.id;
        this.session.userToken = loginData.result.token;

        const { data: userData } = await secureAxios.get(
          `users/${loginData.result.id}`
        );

        this.session.userDetail = {
          email: userData.email,
          isAdmin: userData.superAdmin,
        };
      }
    },
    async setAUserInfos(kvalue, value) {
      const { data } = await secureAxios.put(`/users/${this.payload}`, {
        [`${kvalue}`]: value,
      });
      console.log(kvalue, ": ", value);
      console.log(data);
    },
    async getUserInfos() {
      const { data } = await secureAxios.get(`users/${this.payload}`);
      console.log("------------");
      console.log(data);
      this.user = data;
      console.log("------------");
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
  },
});
