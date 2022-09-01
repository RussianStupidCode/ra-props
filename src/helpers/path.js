const BASE_URL = process.env.PUBLIC_URL || "";

const ROUTER_PATH = {
  base: `${BASE_URL}`,
  films: `${BASE_URL}/films`,
  listing: `${BASE_URL}/listing`,
};

export { BASE_URL, ROUTER_PATH };
