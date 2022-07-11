import React, { useState } from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';

const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const contextValue = {
    darkTheme,
    setDarkTheme,
  };

  return (
    <AppContext.Provider value={ contextValue } >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
