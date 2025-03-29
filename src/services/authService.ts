import FingerprintJS from "@fingerprintjs/fingerprintjs";

import api from "./apiClient";
import UserDetail from "../interfaces/UserDetail";

export const authService = {
  async verifyDevice() {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    try {
      const { data } = await api.post("/auth/verify", {
        visitorId: result.visitorId,
      });
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  async register(user: UserDetail) {
    try {
      const { data } = await api.post("/auth/register", user);
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
