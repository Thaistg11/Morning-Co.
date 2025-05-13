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
        lat: 51.8915, lng: -2.0798

    }

    return (

        <div>

            <div className="location-container">


                <div className="map">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{ width: '100%', height: '100%' }}
                            center={position}
                            zoom={15}
                            options={{
                                mapId: '8aee7f800f4b71edefa03fcc',
                            }}
                        >
                            <Marker position={position} options={{
                                label: {
                                    text: "Morning&Co",
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
                <div className="adress-times">
                    <div className="row mt-5 mx-1 justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="adress-section">
                            <h1 className="mb-4 text-center">Cheltenham</h1>
                                <h3 className="mb-4 text-center"> 52 Suffolk Road </h3>
                            </div>

                            <div className="oppening-times"> 
                            <h4 className="mb-4 text-center">Oppening Times </h4>
                            <p className="mb-4 text-center"> 08:00 to 15:00 Weekdays </p>
                            <p className="mb-4 text-center"> 09:00 to 15:00 Weekends </p>
                            </div>

                        </div>

                    </div>
                </div>

            </section>

        </div>


    );
};

export default Locations;