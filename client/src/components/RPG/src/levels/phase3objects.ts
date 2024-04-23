interface Phase3Objects {
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

export const phase3objects: Phase3Objects = {
  hero: {
    position: {
      x: 66, // 66
      y: 34, // 34
    },
  },
  rod1: {
    x: 49, // 40 //fio
    y: 45, // 44
    dialogID: 20,
  },
  rod2: {
    x: 24, // 56
    y: 35, // 19
    dialogID: 21,
  },
  rod3: {
    x: 47, // 25
    y: 35, // 30
    dialogID: 22,
  },
  dialogBubble: {
    // modal
    x: 54,
    y: 51,
    dialogID: 19,
  },
  npc1: {
    // svet
    x: 46, // 46
    y: 48, // 40
    dialogID: 24,
    exit: {
      x: 0,
      y: 0,
    },
    skin: 0,
  },
  npc2: {
    x: 30, // 23
    y: 24, // 28
    dialogID: 23,
    exit: {
      x: 0,
      y: 0,
    },
    skin: 8,
  },
};
