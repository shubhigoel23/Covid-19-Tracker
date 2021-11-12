function myFunction(x) {
  x.classList.toggle("change");
  $('.navbar').toggleClass('nav-toggle');
}

const mapBox_token="pk.eyJ1Ijoic2h1YmhpZ29lbDIwIiwiYSI6ImNrdmNybHg4cjZyd20zMHM3bzhiZTlneXoifQ.vkGRaV8Vb94Z_KcffajC0Q";

mapboxgl.accessToken = mapBox_token;
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10'
,zoom: 1.5 ,
center:[0,20]
});
// for dark mode of the map: change "streets-v11"  to "dark-v10"

const getColorFromCount = (country_population,confirmed)=>{
const fiftyPercent=(0.5*country_population)
  if((0.7*country_population)<confirmed)
  return "red";
  else if (fiftyPercent<=confirmed)
  return "blue";
  else
  return "grey";
}

fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations", {
	"method": "GET",
	"headers": {
    'Content-Type':'application/json'
	}
})
.then(response => response.json())
.then(data =>{
  const latest=data.latest;
  console.log(data);
  console.log(latest);
  //for accesing latest total number of cases worldwide

  const locations=data.locations;
  console.log(locations);
  // for accessing the loactions arrray

  locations
  .forEach(location => {
    const coordinates=location.coordinates;
    const{latitude,longitude}=coordinates;
    const latest=location.latest;
    const {confirmed,deaths}=latest;
    const {country_population}=location;
   new mapboxgl.Marker({
     color:getColorFromCount(country_population,confirmed)
   })
      .setLngLat([longitude,latitude])
    
      .addTo(map)
/* 
Add an event listener that runs
  when a user clicks on the map element.
*/
.addTo(map);
map.on('click', (event) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ['mapbox://styles/mapbox/dark-v10'] // replace with your layer name
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];

  /* 
    Create a popup, specify its options 
    and properties, and add it to the map.
  */
    const popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat([longitude,latitude])
    .setHTML(
      `<h4>Cases</h4>
      <h3>
      <ul>
      <li>Confirmed:${confirmed}</li>
      <li>Deaths:${deaths}</li>
      </ul></h3>`
    )

});      
  });
} )
.catch(err => {
	console.error(err);
});
