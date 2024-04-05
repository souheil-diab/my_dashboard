
import React, { Suspense, lazy } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserProvider } from './components/UserContext';

import Home from './components/Home';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = lazy(() => import('./components/UserList'));



function App() {


  return (
    <BrowserRouter>
      <UserProvider>
        <>
        <AppNavbar/>
        <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/users' element={ <Suspense fallback={<div>Loading user profiles...</div>}>
       <UserList/>
      </Suspense>} />
      </Routes>
     
      </>
     </UserProvider>
   </BrowserRouter>
  );
}

export default App;
