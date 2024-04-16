import { GameObject } from "../components/RPG/src" 

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
  condition: string, // тут добавил
  topic_id: number,
}

interface IEvent {
  id: number,
  eventName: string,
  caller: GameObject,
  callback: () => void,
}

export type { IUser, ILoginPassword, ILoginEmailPassword, IGameStat, ICard, IEvent }