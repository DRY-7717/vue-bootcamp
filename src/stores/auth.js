import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios, { AxiosHeaders } from "axios";

export const useauthStore = defineStore("auth", () => {
  const user = ref(null);
  const getUser = computed(() => user.value);

  async function login(credentials) {
    const response = await axios.post(
      "https://zullkit-backend.demo.belajarkoding.com/api/login",
      credentials
    );
    localStorage.setItem("access_token", response.data.data.access_token);
    localStorage.setItem("token_type", response.data.data.token_type);
    await getDataUser();
  }

  async function register(credentials) {
    const response = await axios.post(
      "https://zullkit-backend.demo.belajarkoding.com/api/register",
      credentials
    );
    localStorage.setItem("access_token", response.data.data.access_token);
    localStorage.setItem("token_type", response.data.data.token_type);
  }

  async function getDataUser() {
    try {
      const { data } = await axios.get(
        "https://zullkit-backend.demo.belajarkoding.com/api/user",
        {
          headers: {
            Authorization: `${localStorage.getItem(
              "token_type"
            )} ${localStorage.getItem("access_token")}`,
          },
        }
      );
      user.value = data;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    user,
    getUser,
    login,
    register,
    getDataUser,
  };
});
