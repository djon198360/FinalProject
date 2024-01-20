const user = (store) => store.SliceAuth;

export const isAuthSelector = (store) => user(store).isAuth || false;
