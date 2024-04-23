interface Phase1Objects {
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

export const phase1objects: Phase1Objects =  {
  hero: {
    position: {
      x: 26, // 26
      y: 56, // 56
    },
  },
  rod1: {
    x: 43,
    y: 42,
    dialogID: 8,
  },
  rod2: {
    x: 53,
    y: 49,
    dialogID: 9,
  },
  rod3: {
    x: 33,
    y: 24,
    dialogID: 10,
  },
  dialogBubble: {
    x: 26,
    y: 51,
    dialogID: 7,
  },
  npc1: {
    x: 24,
    y: 18,
    dialogID: 12,
    exit: {
      x: 416,
      y: 272,
    },
    skin: 0,
  },
  npc2: {
    x: 23,
    y: 33,
    dialogID: 11,
    exit: {
      x: 0,
      y: 0,
    },
    skin: 4,
  },
};
