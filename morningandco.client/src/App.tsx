import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Home from './Pages/Home.tsx';
//import Login from './Pages/Login.tsx';
// import Register from './Pages/Register.tsx';
import HomePage from './Pages/HomePage.tsx';
import MenuPage from './Pages/MenuPage.tsx';
import LocationsPage from './Pages/LocationsPage.tsx';
import ReservationsPage from './Pages/ReservationsPage.tsx';
import ContactUsPage from './Pages/ContactUsPage.tsx';



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/Menu" element={<MenuPage />} />
                <Route path="/Locations" element={< LocationsPage />} />
                <Route path="/Reservations" element={< ReservationsPage />} />
                <Route path="/ContactUs" element={< ContactUsPage />} />
                <Route path="/" element={<HomePage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;


/*/<BrowserRouter>
    <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
    </Routes>
</BrowserRouter> /*/