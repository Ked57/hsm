export type Server = {
  address: string;
  status: {
    isUp: boolean;
    ping: number;
  };
};

export type State = {
  manager: {
    address: string;
    key: string;
  };
  servers: { [key: string]: Server };
  showMenu: boolean;
};

export const state: State = {
  manager: {
    address: "",
    key: ""
  },
  showMenu: false,
  servers: {
    mine: {
      address: "10.9.0.6",
      status: {
        isUp: false,
        ping: 0
      }
    }
  }
};
