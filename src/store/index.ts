import { init, RematchRootState, RematchDispatch } from "@rematch/core";
import users from "./users";

const models = {
  users,
};

const store = init({
  models,
});

export default store;

export type RootState = RematchRootState<typeof models>;
export type RootDispatch = RematchDispatch<typeof models>;
