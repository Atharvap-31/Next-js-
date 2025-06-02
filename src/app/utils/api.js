import { JSON_ULR } from "../constant/urlConstant";

export const getPosts = async () => {
  const res = await fetch(JSON_ULR);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};
