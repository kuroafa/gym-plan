import React from 'react'
import {useLoadScript} from '@react-google-maps/api'
import MapLogic from './MapLogic';

type Props = {}

const Map = (props: Props) => {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey,
    libraries: ['places']
  });
  if (!isLoaded) {
    // You can optionally render a loading indicator here.
    return <div>Loading...</div>;
  }
  return (
    <MapLogic/>
  )
}

export default Map