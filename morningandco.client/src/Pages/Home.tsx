import HomeAutorized from "../Components/HomeAutorized.tsx";
import NavBar from "../Components/NavBar.tsx";
import AuthorizeView, { AuthorizedUser } from "../Components/AuthorizeView.tsx";
import Footer from "../Components/Footer.tsx";



function Home() {
    return (
      
        <AuthorizeView>
            <NavBar />
            
            <span className="contact-text font-weight-light mb-4">
                Welcome, <AuthorizedUser value="email" />!
                <br></br>
                Your ID is: <AuthorizedUser value="id" />.
            </span>

            <HomeAutorized />

     

           
            <Footer/>

        </AuthorizeView>


    );
}

export default Home;


