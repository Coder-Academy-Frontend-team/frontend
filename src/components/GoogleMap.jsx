import React, {useEffect} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import '../styles/GoogleMap.css';

function GoogleMap(props) {
  const {google, latitude, longitude} = props;

  // useEffect(() => {
  //   console.log("change")
  // });

  return (
    <Map
      google={google}
      zoom={13}
      style={{width:'50%'}}
      initialCenter={{lat: latitude, lng: longitude}}
      center={{lat: latitude, lng: longitude}}
    >
      <Marker position={{lat: latitude, lng: longitude}} />
    </Map>
    
  );
}

export default GoogleApiWrapper({apiKey: 'AIzaSyApnc2TgJNtG3sxgKOHbBldQzDEeffYbGg'})(GoogleMap);