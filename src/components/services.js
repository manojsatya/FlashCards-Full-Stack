export function getCards() {
  return fetchCards();
}

export function postCard(data) {
  return fetchCards({ method: "POST", data });
}

function fetchCards({ method = "GET", id = "", data } = {}) {
  return fetch("http://localhost:4000/cards" + id, {
    method,
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json"
    }
  }).then(res => res.json());
}
