interface Phase2Objects {
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

export const phase2objects: Phase2Objects = {
  hero: {
    position: {
      x: 19, // 19
      // x: 24, // 19
      y: 52, // 52
      // y: 28, // 53
    },
  },
  rod1: {
    x: 40, // 40
    y: 44, // 44
    dialogID: 14,
  },
  rod2: {
    x: 56, // 56
    y: 19, // 19
    dialogID: 16,
  },
  rod3: {
    x: 25, // 25
    y: 30, // 30
    dialogID: 17,
  },
  dialogBubble: {
    x: 26,
    y: 41,
    dialogID: 13,
  },
  npc1: {
    x: 46, // 46
    y: 40, // 40
    dialogID: 15,
    exit: {
      x: 0,
      y: 0,
    },
    skin: 0,
  },
  npc2: {
    x: 23, // 23
    y: 28, // 28
    dialogID: 18,
    exit: {
      x: 0,
      y: 0,
    },
    skin: 6,
  },
};