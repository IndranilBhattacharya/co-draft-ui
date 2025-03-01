import api from "./apiClient";

export const authService = {
  async verifyDevice() {
    const { data } = await api.post("/auth/verify", {
      deviceId: "123",
    });
    return data;
  },
};
