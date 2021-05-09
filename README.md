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
  ]
}

export default globalState
```

Really Store

```js
import { init } from "@rematch/core";

const models = {};

const store = init({
  models,
});

export default store;
```
