import './App.css';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Home from './Pages/Home.tsx';
//import Login from './Pages/Login.tsx';
// import Register from './Pages/Register.tsx';
import HomePage from './Pages/HomePage.tsx';



function App() {
    return (
        <HomePage/>
       
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