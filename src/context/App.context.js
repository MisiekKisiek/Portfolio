import { createContext } from 'react';

const defaultValue = {
  menuVisibility: false,
  handleMenuVisibility: () => { },
}

export { defaultValue };

const AppContext = createContext(defaultValue);

export default AppContext;

/*
if (context) setcontext(prevState => ({ ...prevState, menuVisibility: false }));
    else if (!context) setcontext(prevState => ({ ...prevState, menuVisibility: true }));
*/
