import React, { useEffect, FC } from "react";
import { connect } from "react-redux";
import UserList from "../../components/UserList";
import { RootState, RootDispatch } from "../../store";
// import allUsers from "../../common/users";

type UsersProps = ReturnType<typeof mapProps> & ReturnType<typeof mapDispatch>;

const Users: FC<UsersProps> = ({ users, load, followToggled }) => {
  useEffect(() => {
    load();
  }, []);

  return <UserList users={users} toggleFollow={followToggled} />;
};

const mapProps = (state: RootState) => ({
  users: state.users,
});

//* 自动会把 reducers 和 effects 映射到 dispatch 上
const mapDispatch = (dispatch: RootDispatch) => ({
  // loaded: dispatch.users.loaded,
  load: dispatch.users.load,
  followToggled: dispatch.users.followToggled,
});

export default connect(
  mapProps,
  mapDispatch
)(Users);
