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

interface IGameStat {
  id: number,
  score: number,
  user_id: number,
  'User.login': string,
  createdAt: string,
  updatedAt: string,
}

export type { IUser, ILoginPassword, ILoginEmailPassword, IGameStat }