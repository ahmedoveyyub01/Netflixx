import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import LogIn from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';
import FirstPage from './pages/FirstPage';
import SingleMovie from './components/SingleMovies';
import Shows from './components/Shows';
import { useState } from 'react';
import MainContext from './useContext/MainContext';



function App() {
  const [searchVal, setSearchVal] = useState('');

  const obj = {
    searchVal,
    setSearchVal,
  }

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={
          <ProtectedRoute>
            <MainContext.Provider value={obj}>
              <Home />
            </MainContext.Provider>
          </ProtectedRoute>} />

          <Route path='/login' element={<LogIn />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/first' element={<FirstPage />} />
          <Route path='/list' element={<Shows />} />

          <Route path="/movie/:id" element={<SingleMovie />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}
 {/* <Route path='/account'
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          /> */}

export default App;
