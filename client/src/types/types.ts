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

interface ICard {
  questions: string,
  answer: string,
  image: string,
  value: number,
  topic_id: number,
}

export type { IUser, ILoginPassword, ILoginEmailPassword, IGameStat, ICard }