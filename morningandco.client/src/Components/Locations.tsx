import '../App.css';
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Locations = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBKP6VFWIJeHUebo8wXRNehmkYsGKrdPqE',
    });

    const position = {
        lat: 51.891917, lng: -2.076778

    }

    return (
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
    );
};

export default Locations;
