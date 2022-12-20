export default async function useChange(data) {
  await fetch("/api/" + data._id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
