import { User } from "../common/types";
import { RematchDispatch } from "@rematch/core";
// import { loadUsers } from "../common/api";
import allUsers from "../common/users";

type State = ReadonlyArray<User>;

const model = {
  state: [] as State,
  reducers: {
    loaded: (state: State, payload: ReadonlyArray<User>) => payload,
    followToggled: (state: State, payload: User) =>
      state.map((user) => {
        if (user.id === payload.id) {
          return {
            ...user,
            isFollowing: !user.isFollowing,
          };
        }
        return user;
      }),
  },
  effects: (dispatch: RematchDispatch) => ({
    async load() {
      // 公共api变了
      // const users = allUsers();
      dispatch.users.loaded(allUsers);
    },
  }),
};

export default model;
