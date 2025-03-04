import FingerprintJS from "@fingerprintjs/fingerprintjs";

import api from "./apiClient";

export const authService = {
  async verifyDevice() {
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    const { data } = await api.post("/auth/verify", {
      visitorId: result.visitorId,
    });
    return data;
  },
};
