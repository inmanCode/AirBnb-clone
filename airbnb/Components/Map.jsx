import React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as geolib from 'geolib';
const Map = ({ searchResults }) => {
  const [selectedLocation, setselectedLocation] = React.useState({});
  const coordinates = searchResults.map((results) => ({
    longitude: results.long,
    latitude: results.lat,
  }));
  const center = geolib.getCenter(coordinates);
  const [viewport, setViewport] = React.useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 8,
    width: '100%',
    height: '100%',
  });
  return (
    <div className='w-full h-full'>
      <ReactMapGL
        mapStyle='mapbox://styles/apollyon111/cks0uqnfq45pj18p6nhgqahoe'
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        {searchResults.map((result) => (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                onClick={() => setselectedLocation(result)}
                aria-label='push-pin'
                role='img'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='h-5 w-5 cursor-pointer animate-bounce'
                  viewBox='0 0 20 20'
                  fill='#FD5B61'
                >
                  <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                </svg>
              </p>
            </Marker>
            {selectedLocation.long === result.long ? (
              <Popup
                onClose={() => setselectedLocation({})}
                closeOnClick={true}
                latitude={result.lat}
                longitude={result.long}
              >
                {result.title}
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Map;
