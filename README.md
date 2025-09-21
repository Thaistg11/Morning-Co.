# Morning and Co


## Introduction
Morning and Co is a full-stack web application built with React and ASP.NET Core 8, designed to provide an engaging and seamless user experience in a coffee shop environment. The platform includes secure authentication with ASP.NET Identity, customizable navigation, dynamic light and dark themes, and integration with external services such as the Google Maps API. The backend is designed to expose RESTful APIs that the frontend consumes, emphasizing modularity and scalability. The result is a reliable, interactive, and user-friendly system.

![Homepage Screenshot](https://raw.githubusercontent.com/Thaistg11/Morning-Co./51ecf91877bea5ecf0e7aa375d7b87d115e88644/morningandco.client/ImagesReadMe/HomeContainer-%20Screenshot.png)

---

## Table of Contents
1. [Introduction](#introduction)  
2. [Features](#features)  
   - [Secure Authentication](#secure-authentication)  
   - [Profile Management](#profile-management)  
   - [Theme Toggle](#theme-toggle)  
   - [Customizable Navigation](#customizable-navigation)  
   - [Google Maps Integration](#google-maps-integration)  
   - [Dynamic Homepage](#dynamic-homepage)  
3. [Technologies Used](#technologies-used)  
4. [Application Workflow](#application-workflow)  
   - [Login](#login)  
   - [Registration](#registration)  
   - [Personal Information Retrieval](#personal-information-retrieval)  
   - [Theme Toggle](#theme-toggle-1)  
   - [Navigation](#navigation)  
   - [Google Maps](#google-maps)  
   - [Homepage](#homepage)  
5. [Backend Configuration](#backend-configuration)  
6. [Future Enhancements](#future-enhancements)  
7. [Author](#author)  


## Features
- **Secure Authentication** – Login and registration with ASP.NET Identity using session and cookie-based authentication.  
- **Profile Management** – Retrieve and display user details including ID, email, and personal information.  
- **Theme Toggle** – Switch between light and dark modes with preferences stored in localStorage.  
- **Customizable Navigation** – Users can control which links (Menu, Locations, Reservations) appear in the navigation bar.  
- **Data Security** – Personal details are delivered via secure, protected API endpoints.  
- **Google Maps Integration** – Displays the coffee shop’s location with interactive markers and address details.  
- **Dynamic Homepage** – A homepage featuring a Bootstrap carousel, About Us section, and responsive photo gallery.  

---

## Technologies Used
- **Frontend:** React, React Hooks, CSS Variables, Bootstrap, @react-google-maps/api  
- **Backend:** ASP.NET Core 8, Entity Framework Core, ASP.NET Identity  
- **Database:** SQL Server (Identity and application data)  
- **APIs:** Google Maps API  
- **Authentication:** Cookie/session-based authentication  
- **Tools:** Swagger UI for API documentation and testing  

---

## Application Workflow

### Login
- User credentials are submitted through a React form to the `/login` endpoint.  
- Session or cookie-based authentication is supported.  
- Authenticated users are redirected to protected pages such as `/HomeAuthorized`.


![Login Page](https://raw.githubusercontent.com/Thaistg11/Morning-Co./51ecf91877bea5ecf0e7aa375d7b87d115e88644/morningandco.client/ImagesReadMe/Login-%20Page.png)



---



### Registration
- Users register with first name, surname, date of birth, email, username, and password.  
- Client-side validation ensures required fields are valid.  
- The AccountController and UserManager securely persist data in the Identity database.

 
 ![Profile Screenshot](https://raw.githubusercontent.com/Thaistg11/Morning-Co./51ecf91877bea5ecf0e7aa375d7b87d115e88644/morningandco.client/ImagesReadMe/Register%20-%20Page.png)



 ---



### Personal Information Retrieval
- Authenticated users can retrieve their details including ID, email, and personal data.  
- React components fetch and display this data securely using Bearer token authentication.

![Profile Workflow](https://raw.githubusercontent.com/Thaistg11/Morning-Co./51ecf91877bea5ecf0e7aa375d7b87d115e88644/morningandco.client/ImagesReadMe/Home%20Autorized%20-Page%202.png)



---



### Theme Toggle
- Users can switch between light and dark themes.  
- Preferences are stored in localStorage and applied dynamically.

![Theme Toggle Workflow]( https://raw.githubusercontent.com/Thaistg11/Morning-Co./51ecf91877bea5ecf0e7aa375d7b87d115e88644/morningandco.client/ImagesReadMe/Login%20Dark%20Mode-%20Page.png)


  ----

  

### Navigation
- Users can choose which navigation items to display.  
- The navigation adapts to both mobile and desktop devices.  
- Authentication context ensures options are available only when logged in.


![Navigation Workflow](https://raw.githubusercontent.com/Thaistg11/Morning-Co./47dfcb5ecd1837d07f7632580bcac3e7177b30b5/morningandco.client/ImagesReadMe/Hide%20Nav.png)


---

### Google Maps
- Integrated using the Google Maps JavaScript API.  
- Displays the coffee shop location with markers and address details.


![Maps Workflow](https://raw.githubusercontent.com/Thaistg11/Morning-Co./51ecf91877bea5ecf0e7aa375d7b87d115e88644/morningandco.client/ImagesReadMe/Location-%20Page.png)


---



### Homepage
- Includes a Bootstrap carousel, About Us section, and responsive photo gallery.  
- Navigation is handled through React Router.

  ![Homepage Workflow](https://raw.githubusercontent.com/Thaistg11/Morning-Co./51ecf91877bea5ecf0e7aa375d7b87d115e88644/morningandco.client/ImagesReadMe/Home%20Container-%20Page.png)


---

## Backend Configuration
- Configured with Entity Framework Core and SQL Server.  
- Defines CORS policies for frontend-backend communication.  
- Configures ASP.NET Identity with unique email enforcement.  
- Middleware manages HTTPS redirection, static files, and authorization.  
- Custom API endpoints include:  
  - `/logout` – Logs users out securely.  
  - `/pingauth` – Returns the authenticated user’s email.  
- Swagger UI is enabled for documentation and testing during development.  

---

## Future Enhancements
- **Client-Side Table Booking** – A page for users to book tables directly.  
- **Contact Us Page** – A fully functional form to allow users to send inquiries.  

---

## Author
Thais Guide  
Developed as part of a full-stack web application training project.
