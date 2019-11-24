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

export const fetchGetCard = (token) => {
  return fetch(`https://loft-taxi.glitch.me/card?"token"=${token}`)
    .then(response => response.json());
};

export const fetchCard = (data) => {
  return fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export const fetchAddressList = () => {
  return fetch("https://loft-taxi.glitch.me/addressList")
    .then(response => response.json());
};

export const fetchRoute = (data) => {
  return fetch("https://loft-taxi.glitch.me/route", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
};