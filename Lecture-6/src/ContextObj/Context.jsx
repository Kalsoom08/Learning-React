import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

// Provider Component
const Context = ({ children }) => {

const [theme, setTheme] = useState('light');

const toggleTheme = () => {
setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
};

return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{children}
</ThemeContext.Provider>
);
};
export { ThemeContext, Context };
