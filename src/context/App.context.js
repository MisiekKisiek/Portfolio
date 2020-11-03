import { createContext } from 'react';

const defaultValue = {
  menu: false,
  handleMenu: () => { },
  menuSticky: false,
  handleMenuSticky: () => { },
}

const AppContext = createContext(defaultValue);

export default AppContext;

export { defaultValue };

/*
if (context) setcontext(prevState => ({ ...prevState, menuVisibility: false }));
    else if (!context) setcontext(prevState => ({ ...prevState, menuVisibility: true }));
*/
