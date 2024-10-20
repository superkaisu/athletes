import { createContext } from 'react';
import React from 'react';

const GlobalContext = createContext({});
export const GlobalProvider = GlobalContext.Provider;
export default GlobalContext;