//menu bar
function myFunction(x) {
  x.classList.toggle("change");
  $('.navbar').toggleClass('nav-toggle');
}

// mapbox 
const mapBox_token="pk.eyJ1Ijoic2h1YmhpZ29lbDIwIiwiYSI6ImNrdmNybHg4cjZyd20zMHM3bzhiZTlneXoifQ.vkGRaV8Vb94Z_KcffajC0Q";
mapboxgl.accessToken = mapBox_token;
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
,zoom: 1.5 ,
center:[0,20]
});
// for dark mode of the map: change "streets-v11"  to "dark-v10"

// assigning color to each marker
const getColorFromCount = (country_population,confirmed)=>{
const fiftyPercent=(0.5*country_population)
  if((0.7*country_population)<confirmed)
  return "#f44336";
  else if (fiftyPercent<=confirmed)
  return "#009688";
  else
  return "grey";
}

//Fetching data 
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
  const locations=data.locations;
  console.log(locations);
  // last updated
  const LastUpdates=document.querySelector('.last-updated');
  // for each location world-wide
  locations
  .forEach(location => {
    const coordinates=location.coordinates;
    const{latitude,longitude}=coordinates;
    const latest=location.latest;
    const {confirmed,deaths,recovered}=latest;
    const {country_population,country,province,last_updated}=location;
    date = new Date(last_updated);
    date =date.getDate()+'-' + (date.getMonth()+1) + '-'+date.getFullYear();
    console.log(date);

//Creating a pop-up
    const Popup = new mapboxgl.Popup({ offset: [0, -15]})
    .setHTML(
      `<h3 style="text-align:center; text-decoration: underline; font-size:18px" title="province" >${province}</h3>
      <h3 style="color:#512947;">Country: ${country}</h3>
      <h4>
      <ul style=" list-style-type: none">
      <li style="color:#CA1655 ">Confirmed: ${confirmed}</li>
      <li style="color:#0B3132 ">Recovered: ${recovered}</li>
      <li style="color:#d00000 ">Deaths: ${deaths}</li>
      </ul>
      </h4>`
    );

// Creating a marker and attaching pop-up
   new mapboxgl.Marker({
     color:getColorFromCount(country_population,confirmed),
    
   })
      .setLngLat([longitude,latitude])
      .setPopup(Popup)
      .addTo(map) 
  }
  );
  LastUpdates.innerText+= ` ${date}`;
} )
.catch(err => {
	console.error(err);
});
