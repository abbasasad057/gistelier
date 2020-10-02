import React, { Component } from 'react';
import L from 'leaflet';
import './mapeditor.css'

// import 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'



class MapEditor extends Component{
    componentDidMount() {
        var map = L.map('map', {
            center: [30.5, 69.3451],
            zoom: 6})
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoiYWJiYXNhc2FkMDU3IiwiYSI6ImNrMWl5Z3BoazA3N2wzaHA1M3J3dDVhdm4ifQ.vr8lXr7BgiEES9ce-s3fkg'
            }).addTo(map);
    };
    render(){
        return(
            <div id='map'></div>
        )
    };
}

export default MapEditor;