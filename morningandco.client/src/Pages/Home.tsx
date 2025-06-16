import HomeAutorized from "../Components/HomeAutorized.tsx";
import NavBarUser from "../Components/NavBarUser.tsx";
import AuthorizeView, { AuthorizedUser } from "../Components/AuthorizeView.tsx";
import Footer from "../Components/Footer.tsx";



function Home() {
    return (
      
        <AuthorizeView>
            <NavBarUser />
            
            <span className="homeAutorized-text font-weight-light mb-4">   
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


