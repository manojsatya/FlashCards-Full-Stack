export function getCards() {
  return fetchCards();
}

export function getNews() {
  return fetchNews();
}

export function postCard(data) {
  return fetchCards({ method: "POST", data });
}

export function patchCard(id, data) {
  return fetchCards({ method: "PATCH", id, data });
}

function fetchCards({ method = "GET", id = "", data } = {}) {
  return fetch("/cards/" + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    }
  }).then(res => res.json());
}

function fetchNews({ method = "GET", id = "", data } = {}) {
  return fetch("http://localhost:3333/news/").then(res => res.json());
}
