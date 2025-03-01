import api from "./apiClient";

export const authService = {
  async checkAuth() {
    const { data } = await api.post("/auth/verify", {
      deviceId: "123",
    });
    return data;
  },
};
