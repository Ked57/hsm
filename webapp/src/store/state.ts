export type State = {
  server: {
    address: String;
    key: String;
  };
};

export const state: State = {
  server: {
    address: "",
    key: ""
  }
};
