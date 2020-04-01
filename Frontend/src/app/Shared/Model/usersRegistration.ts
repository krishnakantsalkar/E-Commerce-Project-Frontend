export interface IuserReg {
  firstname: string;
  lastname: string;
  newsLetterCheck: boolean;
  isAdmin?: boolean;
  userLogin: {
    userEmail: string;
    userPassword: string;
  };
  termsAcceptCheck: boolean;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  sendConfirmationMail?: string;
  updatedDate?: Date;

  token?: string;
  message?: string;
  _id?: string;
}
