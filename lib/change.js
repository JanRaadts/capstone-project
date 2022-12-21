export default async function updateChange(data) {
  await fetch("/api/" + data._id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
