interface IUser {
  id?: number;
  login: string;
  email?: string;
  password: string;
  character?: string;
  score?: number;
  level?: number;
  err?: string;
}

interface IGameSave {
  score: number;
  level: number;
}

interface ILoginPassword {
  login: string;
  password: string;
}

interface ILoginEmailPassword {
  login: string;
  password: string;
  email?: string;
}

interface IGameStat {
  id: number,
  score: number,
  level: number,
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
  condition: unknown, // тут добавил
  topic_id: number,
}

interface IEvent {
  id: number,
  eventName: string,
  caller: string,
  callback: () => void,
}

interface IFlashCard {
  question: string;
  answer: string;
  variants: Array<string>;
}

export type { IUser, ILoginPassword, ILoginEmailPassword, IGameStat, ICard, IEvent, IGameSave, IFlashCard }