import { Component, OnInit } from '@angular/core';
import { point, polyline } from 'leaflet';
declare let L;
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  latitude;
  longitude;
  map;
  polyArray = [];
  mapMarkers;
  polygon;
  dataUrl;
  polyline;
  constructor() { }
  
  ngOnInit() {
    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    var marker = L.marker([13.060172, 77.565097]).addTo(this.map);
    marker.addEventListener('mouseover',function(marker){
      marker.target.bindPopup('Marker Added')
            .openPopup();
    });
  }         
  addMarkers(event){
    this.mapMarkers =L.marker([this.latitude,this.longitude]).addTo(this.map);
    this.polyArray.push([this.latitude,this.longitude]);
    this.map.setView([this.latitude,this.longitude], 18);
  }
  drawPolygon(event){
    this.polygon = L.polygon([this.polyArray]).addTo(this.map);
  }
  removePolygon(event){
    if(this.polygon){
      this.polygon.onRemove();
    } else{
      alert("There is no polygon to remove");
    }
  }
  DrawPolyline(event){
    this.polyline = L.polyline([this.polyArray]).addTo(this.map);
  }
  fileReader(event){
    var input = event.target.files[0];
    var reader = new FileReader();
    reader.readAsText(input,"UTF-8");
    reader.onload = () =>{
      this.dataUrl = reader.result;
      this.dataUrl = JSON.parse(this.dataUrl);
      this.dataUrl.coordinates.forEach(element => {
        this.latitude = element.lat;
        this.longitude = element.lng;     
        this.mapMarkers =L.marker([this.latitude,this.longitude]).addTo(this.map);   
      });
    };
  }
}
