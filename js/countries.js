function myFunction(x) {
  x.classList.toggle("change");
  $('.navbar').toggleClass('nav-toggle');
}

// all country names with thier ISO codes
let country_list = [
    { name: 'USA', code: 'US' },
    { name: 'Spain', code: 'ES' },
    { name: 'Italy', code: 'IT' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'UK', code: 'GB' },
    { name: 'Turkey', code: 'TR' },
    { name: 'Iran', code: 'IR' },
    { name: 'Russia', code: 'RU' },
    { name: 'Belgium', code: 'BE' },
    { name: 'Brazil', code: 'BR' },
    { name: 'Canada', code: 'CA' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Portugal', code: 'PT' },
    { name: 'India', code: 'IN' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Austria', code: 'AT' },
    { name: 'Peru', code: 'PE' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Japan', code: 'JP' },
    { name: 'S. Korea', code: 'KR' },
    { name: 'Chile', code: 'CL' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Poland', code: 'PL' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Romania', code: 'RO' },
    { name: 'Pakistan', code: 'PK' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Denmark', code: 'DK' },
    { name: 'Norway', code: 'NO' },
    { name: 'UAE', code: 'AE' },
    { name: 'Czechia', code: 'CZ' },
    { name: 'Australia', code: 'AU' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Serbia', code: 'RS' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Ukraine', code: 'UA' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'Belarus', code: 'BY' },
    { name: 'Dominican Republic', code: 'DO' },
    { name: 'Panama', code: 'PA' },
    { name: 'Finland', code: 'FI' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Luxembourg', code: 'LU' },
    { name: 'South Africa', code: 'ZA' },
    { name: 'Egypt', code: 'EG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Morocco', code: 'MA' },
    { name: 'Thailand', code: 'TH' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'Moldova', code: 'MD' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Greece', code: 'GR' },
    { name: 'Hungary', code: 'HU' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Bahrain', code: 'BH' },
    { name: 'Croatia', code: 'HR' },
    { name: 'Iceland', code: 'IS' },
    { name: 'Kazakhstan', code: 'KZ' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'New Zealand', code: 'NZ' },
    { name: 'Azerbaijan', code: 'AZ' },
    { name: 'Slovenia', code: 'SI' },
    { name: 'Lithuania', code: 'LT' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Bosnia and Herzegovina', code: 'BA' },
    { name: 'Oman', code: 'OM' },
    { name: 'North Macedonia', code: 'MK' },
    { name: 'Slovakia', code: 'SK' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Cameroon', code: 'CM' },
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Tunisia', code: 'TN' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Ivory Coast', code: 'CI' },
    { name: 'Cyprus', code: 'CY' },
    { name: 'Djibouti', code: 'DJ' },
    { name: 'Latvia', code: 'LV' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Lebanon', code: 'LB' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Niger', code: 'NE' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Albania', code: 'AL' },
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Honduras', code: 'HN' },
    { name: 'San Marino', code: 'SM' },
    { name: 'Palestine', code: 'PS' },
    { name: 'Malta', code: 'MT' },
    { name: 'Taiwan', code: 'TW' },
    { name: 'Jordan', code: 'JO' },
    { name: 'Réunion', code: 'RE' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Mauritius', code: 'MU' },
    { name: 'DRC', code: 'CD' },
    { name: 'Montenegro', code: 'ME' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Vietnam', code: 'VN' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Mali', code: 'ML' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Tanzania', code: 'TZ' },
    { name: 'Martinique', code: 'MQ' },
    { name: 'Guadeloupe', code: 'GP' },
    { name: 'Rwanda', code: 'RW' },
    { name: 'Congo', code: 'CG' },
    { name: 'Brunei', code: 'BN' },
    { name: 'Somalia', code: 'SO' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Cambodia', code: 'KH' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Trinidad and Tobago', code: 'TT' },
    { name: 'Gabon', code: 'GA' },
    { name: 'Myanmar', code: 'MM' },
    { name: 'Ethiopia', code: 'ET' },
    { name: 'Aruba', code: 'AW' },
    { name: 'French Guiana', code: 'GF' },
    { name: 'Monaco', code: 'MC' },
    { name: 'Bermuda', code: 'BM' },
    { name: 'Togo', code: 'TG' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Equatorial Guinea', code: 'GQ' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Sudan', code: 'SD' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Cabo Verde', code: 'CV' },
    { name: 'Cayman Islands', code: 'KY' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'French Polynesia', code: 'PF' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Maldives', code: 'MV' },
    { name: 'Libya', code: 'LY' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Macao', code: 'MO' },
    { name: 'Haiti', code: 'HT' },
    { name: 'Syria', code: 'SY' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Saint Martin', code: 'MF' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Chad', code: 'TD' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Sierra Leone', code: 'SL' },
    { name: 'Zimbabwe', code: 'ZW' },
    { name: 'Angola', code: 'AO' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Eswatini', code: 'SZ' },
    { name: 'Botswana', code: 'BW' },
    { name: 'Timor-Leste', code: 'TL' },
    { name: 'Belize', code: 'BZ' },
    { name: 'New Caledonia', code: 'NC' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Saint Lucia', code: 'LC' },
    { name: 'Grenada', code: 'GD' },
    { name: 'Saint Kitts and Nevis', code: 'KN' },
    { name: 'CAR', code: 'CF' },
    { name: 'St. Vincent Grenadines', code: 'VC' },
    { name: 'Turks and Caicos', code: 'TC' },
    { name: 'Falkland Islands', code: 'FK' },
    { name: 'Greenland', code: 'GL' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Suriname', code: 'SR' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Vatican City', code: 'VA' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Papua New Guinea', code: 'PG' },
    { name: 'St. Barth', code: 'BL' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Bhutan', code: 'BT' },
    { name: 'Caribbean Netherlands', code: 'BQ' },
    { name: 'British Virgin Islands', code: 'VG' },
    { name: 'Sao Tome and Principe', code: 'ST' },
    { name: 'South Sudan', code: 'SD' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Saint Pierre Miquelon', code: 'PM' },
    { name: 'Yemen', code: 'YE' },
    { name: 'China', code: 'CN' }
];

// select search country elements
const search_country_element=document.querySelector(".search-country");
const change_country_btn=document.querySelector(".change-country");
const search_input=document.getElementById("search-input");
const close_btn=document.querySelector(".close-btn");
const country_list_element=document.querySelector(".country-list");

// Creating a country list
function createCountryList(){
  const num_of_countries=country_list.length;
  let i=0, ul_list_id;
  country_list.forEach( (country,index) => {
    // inside the country list each country has it's index assigned to it (starting from zero).
    // (0%math.ceil(203/3))==0 ) means that 203/3=67.66 so  1st 68 countries get added inside ul_list1 and then next 68 inside the 2nd list and so on.
    if(index % Math.ceil(num_of_countries/num_of_ul_lists)==0){
        ul_list_id=`list-${i}`;
        country_list_element.innerHTML +=`<ul id="${ul_list_id}"></ul>`;
        i++;
    }
    // when we click on any country's name from the list, the data is fetched from the api corresponding to that country.
    document.getElementById(`${ul_list_id}`).innerHTML +=`<li onclick="fetchData('${country.name}')" id ="${country.name}">
    ${country.name}
    </li>`;
  })
  }
let num_of_ul_lists=3;
createCountryList();

//SHOW/HIDE THE COUNTRY LIST ON CLICK EVENT
change_country_btn.addEventListener("click",function(){
  search_input.value="";
  reset_country_list();
  search_country_element.classList.toggle("hide");
  //toggle method checks if hide was there in the class list of search_country_element. if it's there, then it  removes it from there and if it was not there, then it add's it in the class list.
  search_country_element.classList.add("fadeIn");
  // adding animations
})

//when we click on close button, the country list disappears
close_btn.addEventListener("click",function(){
  search_country_element.classList.toggle("hide");
})

//when we click on any country name, the country list disappears
country_list_element.addEventListener("click",function(){
  search_country_element.classList.toggle("hide");
})

//Country Filter
search_input.addEventListener("input",function(){
  let input_value=search_input.value.toUpperCase();
  //input_value contains the input characters all in uppercase

  country_list.forEach(country=> {

  // checks if the country's name starts with the input value, if yes then the hide class is removed and makes the country's with same starting alphabet visible else invisible.
  if(country.name.toUpperCase().startsWith(input_value)){
    document.getElementById(country.name).classList.remove("hide");
    }

  else{
    document.getElementById(country.name).classList.add("hide");
    }
  })

})

// Reset's country list after every click on change button
function reset_country_list(){
  country_list.forEach(country=> {
    document.getElementById(country.name).classList.remove("hide");
  }
)}

// country specific stats
const country_name= document.querySelector(".country .name");
const total_cases_old_value= document.querySelector(".total-cases .value");
const total_cases_new_value= document.querySelector(".total-cases .new-value");
const recovered_old_value= document.querySelector(".recovered .value");
const recovered_new_value= document.querySelector(".recovered .new-value");
const deaths_old_value= document.querySelector(".deaths .value");
const deaths_new_value= document.querySelector(".deaths .new-value");

// APP VARIABLES
let app_data = [],
  cases_list = [],
  recovered_list = [],
  deaths_list = [],
  dates = [];
  formatedDates = [];

// GET USERS COUNTRY CODE USING IP ADDRESS.
fetch("https://api.ipgeolocation.io/ipgeo?apiKey=14c7928d2aef416287e034ee91cd360d")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let country; 
    let country_code=data.country_code2;
    console.log(country_code);
    country_list.forEach(countries => {
        if(countries.code==country_code){
          country=countries.name;    
        }   
    });
    console.log(country);
    fetchData(country);
  });

// fetchs Data for particular country 
function fetchData(country) {
  user_country = country;
  country_name.innerHTML = "Loading...";
  (cases_list = []),
    (recovered_list = []),
    (deaths_list = []),
    (dates = []),
    (formatedDates = []);

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  // Async and Await:
  // async and await make promises easier to write".async makes a function return a Promise.await makes a function wait for a Promise
  const api_fetch = async (country) => {

    // fetch's confirmed cases of the country
    await fetch(
      "https://api.covid19api.com/total/country/" + country + "/status/confirmed",requestOptions)
    .then((res) => {
        return res.json();
      })
    .then((data) => {

      // the data of every date with confirmed cases for each entry is pushed in the list.
      data.forEach((entry) => {
        dates.push(entry.Date);
        formatDate(dates);
        cases_list.push(entry.Cases);
      });
      console.log("cases_list: ");
      console.log(cases_list);

    });
     
    // fetch's recovered cases of the country
    await fetch(
      "https://api.covid19api.com/total/country/" + country + "/status/recovered", requestOptions)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
      // the data of every date with recovered cases for each entry is pushed in the list.
      data.forEach((entry) => {
        recovered_list.push(entry.Cases);
        formatDate(dates);
      });
      console.log("recovered_list: ");
      console.log(recovered_list);
    });
    
    // fetch's deaths cases of the country
    await fetch(
      "https://api.covid19api.com/total/country/" + country + "/status/deaths", requestOptions)

    .then((res) => {
        return res.json();
    })
    .then((data) => {
      // the data of every date with deaths for each entry is pushed in the list.
      data.forEach((entry) => {
        deaths_list.push(entry.Cases);
        formatDate(dates);
      });
      console.log("deaths_list: ");
      console.log(deaths_list);
    });
    updateUI();
  };
  api_fetch(country);
}

// update's UI after every search
function updateUI(){
  updateStats();
  axesLinearChart();
}

function  updateStats(){
  const total_cases= cases_list[cases_list.length-1];
  //-1 because the starting index is 0 and therefore the last index will be total length of the list -1.
  const new_total_cases= total_cases-(cases_list[cases_list.length-2]);

  const recovered_cases= recovered_list[recovered_list.length-1];
  const new_recovered_cases= recovered_cases-(recovered_list[recovered_list.length-2]);

  const death_cases= deaths_list[deaths_list.length-1];
  const new_death_cases=death_cases-(deaths_list[deaths_list.length-2]);

  // replacing the elements with the actual updated values inside the html.
  country_name.innerHTML=user_country;
  total_cases_old_value.innerHTML=total_cases.toLocaleString();
  //toLocaleString() method :converts a number to comma separated format javascript
  total_cases_new_value.innerHTML=`+${new_total_cases.toLocaleString()}`;
  recovered_old_value.innerHTML=recovered_cases.toLocaleString();
  recovered_new_value.innerHTML=`+${new_recovered_cases.toLocaleString()}`;
  deaths_old_value.innerHTML=death_cases.toLocaleString();
  deaths_new_value.innerHTML=`+${new_death_cases.toLocaleString()}`;

  // format's dates
  dates.forEach((date) => {
    formatedDates.push(formatDate(date));
  });
  const LastUpdated=document.querySelector('.last-updated');
  const LastUpdates= formatedDates[formatedDates.length-1];
  LastUpdated.innerText+= ` ${LastUpdates}`;
}

// line chart
const ctx = document.getElementById("axes_line_chart").getContext("2d");
// UPDATE CHART
let my_chart;
function axesLinearChart() {
  if (my_chart) {
    my_chart.destroy();
  }
  my_chart = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "Cases",
          data: cases_list,
          fill: false,
          borderColor: "#FFF",
          backgroundColor: "#FFF",
          borderWidth: 1,
          
        },
        {
          label: "Recovered",
          data: recovered_list,
          fill: false,
          borderColor: "#009688",
          backgroundColor: "#009688",
          borderWidth: 1,
        },
        {
          label: "Deaths",
          data: deaths_list,
          fill: false,
          borderColor: "#f44336",
          backgroundColor: "#f44336",
          borderWidth: 1,
        },
      ],
      labels: formatedDates,
    },
    options: {
      legend: {
        labels: {
          
            fontColor: "grey",
            fontSize: 15,
           
        }
    },
      scales: {
        yAxes: [{
            ticks: {
                fontColor: "grey",
                fontSize: 14
              
            }
        }],
        xAxes: [{
            ticks: {
                fontColor: "grey",
                fontSize: 13
            }
        }]
    },
      responsive:true,
      maintainAspectRatio: false,
    },
  });
}

// FORMAT DATES
const monthsNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(dateString) {
  let date = new Date(dateString);
  date = date.getDate()+'-' +monthsNames[date.getMonth()] +'-'+date.getFullYear();
  return date;
  // getDate function returns the date from the date and getMonth returns the month number
}
