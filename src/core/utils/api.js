export const fetchLogIn = (data) => {
  return fetch("https://loft-taxi.glitch.me/auth", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export const fetchSignUp = (data) => {
  return fetch("https://loft-taxi.glitch.me/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
};
