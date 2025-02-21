import { configureStore } from "@reduxjs/toolkit";

import reducer from "../reducers";

const makeStore = configureStore({ reducer });

export default makeStore;
