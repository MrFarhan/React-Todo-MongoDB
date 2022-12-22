const dev = "http://localhost:4000";
const prod = "https://mern-todo.surge.sh";

export const baseURL =
  window.location.hostname.split(":")[0] === "localhost" ||
  window.location.hostname.includes("192")
    ? dev
    : prod;
