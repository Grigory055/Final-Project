interface Phase0Objects {
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

export const phase0objects: Phase0Objects =  {
  hero: {
    position: {
      x: 19, // 19
      // x: 25, // 19
      y: 26, // 26
      // y: 49, // 26
    },
  },
  rod1: {
    x: 39,
    y: 20,
    dialogID: 3,
  },
  rod2: {
    x: 46,
    y: 39,
    dialogID: 4,
  },
  rod3: {
    x: 35,
    y: 48,
    dialogID: 5,
  },
  dialogBubble: {
    x: 35,
    y: 24,
    dialogID: 2,
  },
  npc1: {
    x: 24,
    y: 26,
    dialogID: 1,
    exit: {
      x: 384,
      y: 384,
    },
    skin: 0,
  },
  npc2: {
    x: 24,
    y: 49,
    dialogID: 6,
    exit: {
      x: 0,
      y: 0,
    },
    skin: 2,
  },
}