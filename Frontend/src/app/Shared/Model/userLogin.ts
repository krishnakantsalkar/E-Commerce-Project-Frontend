export interface IuserLogin {
  userLogin: {
    userEmail: string;
    userPassword: string;
  };
  token?: string;
  message?: string;
  error?: string;
}
