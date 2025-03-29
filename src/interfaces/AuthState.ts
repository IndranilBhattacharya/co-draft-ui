import UserDetail from "./UserDetail";

export default interface AuthState {
  isVerified: boolean;
  userDetails: UserDetail | null;
}
