# react-rematch

## Notes

```bash
yarn add @rematch/core react-redux
```

Global State Example

```js
const globalState = {
  users: [
    { id: "1001", name: { first: "Join", last: "Doe" } },
    { id: "1002", name: { first: "Jane", last: "Smith" } },
  ],

  toasts: [
    { id: "NTF_001", message: "User followed", type: "success" },
    { id: "NTF_002", message: "User unfollowed", type: "warning" },
  ],
};

export default globalState;
```

Really Store

```js
const models = {
  users,
};

const store = init({
  models,
});

export default store;

export type RootState = RematchRootState<typeof models>;
export type RootDispatch = RematchDispatch<typeof models>;
```

- 一定要注意 store 里的 model 的对象的格式：`state` `reducers` `effects`，被锁定了
