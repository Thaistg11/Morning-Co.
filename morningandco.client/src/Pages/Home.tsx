import WeatherForecast from "../Components/WeatherForecast.tsx";
import LogoutLink from "../Components/LogoutLink.tsx";
import NavBar from "../Components/NavBar.tsx";
import AuthorizeView, { AuthorizedUser } from "../Components/AuthorizeView.tsx";
import Footer from "../Components/Footer.tsx";



function Home() {
    return (
      
        <AuthorizeView>
            <NavBar/>
            <span><LogoutLink>Logout <AuthorizedUser value="email" /></LogoutLink></span>
            <WeatherForecast />


           
            <Footer/>

        </AuthorizeView>


    );
}

export default Home;