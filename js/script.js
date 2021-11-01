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
center:[0,20],
//  fill-antialias:true,
//  fill-color: white
});
// for dark mode of the map: change "streets-v11"  to "dark-v10"

fetch("https://covid-193.p.rapidapi.com/statistics", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-193.p.rapidapi.com",
		"x-rapidapi-key": "40f3d2b5fdmsh525a683ae9d53ebp182319jsn48aaa8d52a9d"
	}
})
.then(response => response.json())
.then(data=>{
  const response=data.response;

    // console.log(response);
    // for extracting data from wihin response array


    // console.log(data.response[4]);
    // for extracting data from wihin response array element 4


    // response.forEach(response => {
    //   console.log(response);
    // });
    // for traversing the array and logging it into the console

    response
    .filter(response=>{
      const continent=response.continent;
      return continent=="Asia";
    })
    .forEach(response => {
      console.log(response);
    });
    // filters out all the countries with continent=Asia

} )
.catch(err => {
	console.error(err);
});







// 2. more latency and less popularity (pink logo)
// fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
// 		"x-rapidapi-key": "40f3d2b5fdmsh525a683ae9d53ebp182319jsn48aaa8d52a9d"
// 	}
// })
// .then(response => response.json())
// .then(data=>{
//     console.log(data);
// } )
// .catch(err => {
// 	console.error(err);
// });




