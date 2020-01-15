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
      address: "51.158.112.111",
      status: {
        isUp: false,
        ping: 0
      }
    }
  }
};
