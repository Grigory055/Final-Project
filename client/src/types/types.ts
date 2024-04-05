interface IUser {
  id: number;
  login: string;
  email: string;
  password: string;
}

interface ILoginPassword {
  login: string;
  password: string;
}

interface ILoginEmailPassword {
  login: string;
  email: string;
  password: string;
}

export type { IUser, ILoginPassword, ILoginEmailPassword }