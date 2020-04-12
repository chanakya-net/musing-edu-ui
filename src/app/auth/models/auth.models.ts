export interface LoginCredentials {
  userName: string;
  password: string;
}
export interface LoggedInUser {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  mailId: string;
  contactNumber: string;
  roles: string[];
  token: string;
}
