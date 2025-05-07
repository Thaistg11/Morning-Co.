import '../App.css';
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const googleMapsKey = import.meta.env.VITE_GOOGLE_MAP_API_KEY;


const Locations = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: googleMapsKey,
    });

    const position = {
        lat: 51.891917, lng: -2.076778

    }

    return (

        <div> 

        <div className="location-container"> 
        

        <div className="map">
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={ position}
                    zoom={15}
                >
                    <Marker position={position} options={{
                        label: {
                            text: "We are here",
                            className: "map-marker",
                        }
                    }} />
                    <></>
                </GoogleMap>
            ) : (
                <>Loading...</>
            )}
            </div>

       

        </div>
            <section>
                <div className="location-adress">
                    <div className="row mt-5 mx-1 justify-content-center">
                        <div className="col-12 col-lg-8">
                            <h1 className="mb-4 text-center">Cheltenham</h1>
                            <h3 className="mb-4 text-center"> 103 London Road </h3>
                            
                            <p className="mb-4 text-center"> 08:00 to 15:00 Weekdays </p>
                            <p className="mb-4 text-center"> 09:00 to 15:00 Weekends </p>
                                

                        </div>

                    </div>
                </div>

            </section>

        </div>


    );
};

export default Locations;
