document.addEventListener("DOMContentLoaded",(function(){if(window?.ABlocksGlobal&&window?.ABlocksGlobal?.is_gutenberg_editor)return;const o=document.querySelectorAll(".ablocks-map-block");o.length&&o.forEach((o=>{((o,t)=>{const e=L.layerGroup();t.mapMarkerList.forEach((function(o){let n="";if(""!==o.title&&(n+="<h6>"+o.title+"</h6>"),""!==o.content&&(n+="<p>"+(o=>{const t={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#039;":"'"};return o.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g,(function(o){return t[o]}))})(o.content)+"</p>"),"custom"===o.iconType){const t=new(L.Icon.extend({options:{iconSize:[o.customIconWidth,o.customIconHeight],popupAnchor:[0,-15]}}))({iconUrl:o.customIconUrl});""!==o.title||""!==o.content?L.marker([o.lat,o.lng],{icon:t}).bindPopup(n).addTo(e):L.marker([o.lat,o.lng],{icon:t}).addTo(e)}else""!==o.title||""!==o.content?L.marker([o.lat,o.lng],{icon:new L.Icon({iconUrl:t?.defaultMarkerIcon,iconSize:[25,41],popupAnchor:[0,-15]})}).bindPopup(n).addTo(e):L.marker([o.lat,o.lng],{icon:new L.Icon({iconUrl:t?.defaultMarkerIcon,iconSize:[25,41],popupAnchor:[0,-15]})}).addTo(e)}));const n="OSM"===t.mapType?"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png":"https://maps.googleapis.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i349018013!3m9!2sen-US!3sUS!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0",r=L.tileLayer(n,{id:"mapbox/light-v9"}),l={zoom:t.mapZoom,zoomControl:!1,layers:[r,e],scrollWheelZoom:t.scrollWheelZoom,dragging:!L.Browser.mobile,tap:!L.Browser.mobile};t.mapMarkerList.length&&t.mapMarkerList[t.centerIndex]&&(l.center=[t.mapMarkerList[t.centerIndex].lat,t.mapMarkerList[t.centerIndex].lng]);const a=L.map(o,l);a.addControl(new L.Control.Fullscreen({position:"topleft"})),L.control.zoom({position:"topright"}).addTo(a)})(o,JSON.parse(o.getAttribute("data-settings")))}))}));