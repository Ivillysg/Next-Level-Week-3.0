import React from 'react';

//styles
import '../styles/pages/orphanages.css';

//assets
import mapMarkerImg from '../assets/imgs/map-marker.svg';
import { Link } from 'react-router-dom';
import {FiPlus} from 'react-icons/all'

import 'leaflet/dist/leaflet.css'
import { Map, TileLayer } from "react-leaflet";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão
esperando a sua visita :)</p>


        </header>

        <footer>
          <strong>
            Palmeira dos Índios
          </strong>
          <span>
            Alagoas
          </span>
        </footer>
      </aside>

      <Map center={[-9.4080247,-36.6507247]}
      zoom={15} style={{ width:'100%', height:'100%' }}>

        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={30} color="#fff"/>
      </Link>
    </div>
  );
}

export default OrphanagesMap;
