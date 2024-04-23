import React from 'react';
import './App.css';
import Main from './Component/Main';
import { useSelector } from 'react-redux';


function App() {
  const isDark = useSelector((state) => state.theme.isDarkMode);
   // useselector로 theme.isDarkMode 가져옴
  return (
    <div className={!isDark ? "App" : "darkbox"}>
      <Main />
    </div>
  );
}

export default App;
