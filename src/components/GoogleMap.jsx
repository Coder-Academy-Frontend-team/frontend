import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../styles/GoogleMap.css';

function GoogleMap(props) {
  const {google, latitude, longitude} = props;

  return (
    <Map
      google={google}
      zoom={8}
      initialCenter={{latitude, longitude}}
    >
      <Marker position={{latitude, longitude}} />
    </Map>
    
  );
}

export default GoogleApiWrapper({apiKey: 'AIzaSyApnc2TgJNtG3sxgKOHbBldQzDEeffYbGg'})(GoogleMap);