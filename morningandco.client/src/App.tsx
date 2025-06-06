import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDarkMode } from './hooks/useDarkMode';
import Home from './Pages/Home.tsx';
import Register from './Pages/Register.tsx';
import Login from './Pages/Login.tsx';
import HomePage from './Pages/HomePage.tsx';
import MenuPage from './Pages/MenuPage.tsx';
import LocationsPage from './Pages/LocationsPage.tsx';
import ReservationsPage from './Pages/ReservationsPage.tsx';
import ContactUsPage from './Pages/ContactUsPage.tsx';






function App() {
    const { theme, toggleTheme } = useDarkMode();
    
    return (

         <>

            <label className="switch" style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}>
                <input
                    type="checkbox"
                    onChange={toggleTheme}
                    checked={theme === 'dark'}
                />
                <span className="slider round"></span>
            </label>



        <BrowserRouter>
            <Routes>

                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/Menu" element={<MenuPage />} />
                <Route path="/Locations" element={< LocationsPage />} />
                <Route path="/Reservations" element={< ReservationsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/ContactUs" element={< ContactUsPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<HomePage />} />

            </Routes>
            </BrowserRouter>


        </>
    );
}

export default App;


/*/<BrowserRouter>
    <Routes>
        <Route path="/HomePage" element={<HomePage />} />
      
        
       
    </Routes>
</BrowserRouter> /*/