import Guardian from "guardian-js";

const apiKey = "1c588504-d8dc-47f3-837c-afa4ceb721ee";
const api = new Guardian(apiKey, true);

export const fetchContent = searchText => {
  return api.content.search(searchText, {});
};
