export default interface AuthState {
  isVerified: boolean;
  userDetails: { visitorId: string; userName: string; avatar: string } | null;
}
