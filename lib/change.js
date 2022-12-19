import { useState, useEffect } from "react";

export default async function useChange(data) {
  await fetch("/api/" + data.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
