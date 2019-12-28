export const fetcher = async (
  url: string,
  path: string,
  token: string,
  payload: { [key: string]: any }
) => {
  const response = await fetch(`${url}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    throw response;
  }
  return response.json();
};
