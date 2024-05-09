import Header from './components/Header';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ViewUsers from './pages/ViewUsers';
import NotFound from './pages/NotFound';
import User from './pages/User';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='usuario' element={<User />} >
            <Route index element={<AddUser />} />
            <Route path='edit/:id' element={<EditUser />} />
            <Route path='view' element={<ViewUsers />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}
