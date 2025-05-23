import FingerprintJS from "@fingerprintjs/fingerprintjs";

import api from "./apiClient";
import UserDetail from "../interfaces/UserDetail";

export const authService = {
  async verifyDevice() {
    const fp = await FingerprintJS.load();
    const { visitorId } = await fp.get();
    try {
      const { data } = await api.post("/auth/verify", {
        visitorId,
      });
      return data;
    } catch (error) {
      return { visitorId, error };
    }
  },
  async register(user: UserDetail) {
    try {
      const payload = { ...user };
      // removing optional loading state
      delete payload.isRegistering;

      const { data } = await api.post("/auth/register", payload);
      return data;
    } catch (error) {
      return error;
    }
  },
};
