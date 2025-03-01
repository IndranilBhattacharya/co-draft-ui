export default interface AuthState {
  isVerified: boolean;
  userDetails: { deviceId: string; userName: string; avatar: string } | null;
}
