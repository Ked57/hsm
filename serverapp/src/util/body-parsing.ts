export const parseBody = (payload: any) =>
  payload && typeof payload === "string" ? JSON.parse(payload) : payload;
