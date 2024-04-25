import { Vector2 } from "../components/RPG/src";

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

interface IPhaseObjects {
  hero: {
    position: {
      x: number;
      y: number;
    };
  };
  rod1: {
    x: number;
    y: number;
    dialogID: number;
  };
  rod2: {
    x: number;
    y: number;
    dialogID: number;
  };
  rod3: {
    x: number;
    y: number;
    dialogID: number;
  };
  dialogBubble: {
    x: number;
    y: number;
    dialogID: number;
  };
  npc1: {
    x: number;
    y: number;
    dialogID: number;
    exit: {
      x: number;
      y: number;
    };
    skin: number;
  };
  npc2: {
    x: number;
    y: number;
    dialogID: number;
    exit: {
      x: number;
      y: number;
    };
    skin: number;
  };
}

interface ImageObject {
  image: HTMLImageElement;
  isLoaded: boolean;
}

interface IEventData {
  type?: string;
  image?: ImageObject;
  position: Vector2;
}

export type { IUser, ILoginPassword, ILoginEmailPassword, IGameStat, ICard, IEvent, IGameSave, IFlashCard, IPhaseObjects, ImageObject, IEventData }