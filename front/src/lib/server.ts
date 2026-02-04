import ky from "ky";

const serverbase = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api/",
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRequest: [
      (request) => {
        // Axios 인터셉터와 유사한 기능
        request.headers.set("Authorization", "Bearer token");
      },
    ],
  },
});

export default serverbase;
