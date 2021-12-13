function myFunction(x) {
    x.classList.toggle("change");
    $('.navbar').toggleClass('nav-toggle');
  }
  
// toggle switch
var switchStatus = true;
$("#togBtn").on('change', function() {
    if ($(this).is(':checked')) {
      switchStatus = $(this).is(':checked');
      document.querySelector('.searchByDistrictForm').classList.toggle("hide");
      document.querySelector('.searchByPinForm').classList.add("hide");
    }
    else {
        switchStatus = $(this).is(':checked');
        document.querySelector(".searchByDistrictForm").classList.add("hide");
        document.querySelector('.searchByPinForm').classList.toggle("hide");
    }
});

//By State And District
let district_id;
let Date1;
function StateAndDistrict() {
    var StateName = document.getElementById("search-State").value;
    var DistrictName = document.getElementById("search-district").value;
    Date1=document.getElementById("date").value;

    // capitalizing the input data 
    StateName=StateName[0].toUpperCase() + 
    StateName.slice(1).toLowerCase();
    DistrictName=DistrictName[0].toUpperCase() + 
    DistrictName.slice(1).toLowerCase();
    console.log(StateName);
    console.log(DistrictName);

    fetchStateId(StateName,DistrictName, Date1);
  }

// Getting STATE CODE
function fetchStateId(StateName,DistrictName, Date1){
  fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states",{
      "method": "GET",
      "headers": {
      'Content-Type':'application/json'
      }
  })
  .then((res) => {
      return res.json();
  })
  .then((data) => {
    console.log(data);
    const states=data.states;
    console.log(states);
    let state_id;

    states
    .filter(state=>{
        const state_name=state.state_name;
        return state_name==StateName;
      })
    .forEach(state => {
      state_id=state.state_id;
      });
    console.log(state_id);  
    fetchDistrictId(state_id,DistrictName, Date1);
  })
}

// Getting District code
function fetchDistrictId(state_id,DistrictName, Date1){
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

    // Async and Await:
    // async and await make promises easier to write".async makes a function return a Promise.await makes a function wait for a Promise
  const api_fetch = async (state_id,DistrictName, Date1) => {
    await fetch(
      "https://cdn-api.co-vin.in/api/v2/admin/location/districts/"+state_id+"", requestOptions)
    .then((res) => {
      return res.json();
    })
    .then((data) => { 
      console.log(data);
      const districts=data.districts;
      console.log(districts);

      districts
      .filter(district=>{
          const district_name=district.district_name;
          return district_name==DistrictName;
      })
      .forEach(district => {
        district_id=district.district_id;
        });

      console.log(district_id);  
      console.log(district_id+" "+Date1);
      fetchDataByDistrict(district_id,Date1);
  })
}
api_fetch(state_id,DistrictName, Date1);
}

// fetch Data By District
function fetchDataByDistrict(district_id,Date1){
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  
  // Async and Await:
  // async and await make promises easier to write".async makes a function return a Promise.await makes a function wait for a Promise
  const api_fetch1 = async (district_id, Date1) => {
    // formatting date
    date = new Date(Date1);
    date =date.getDate()+'-' + (date.getMonth()+1) + '-'+date.getFullYear();
    console.log(date);

    await fetch(
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id= "+district_id+"&date= "+date+"", requestOptions)
    .then((res) => {
      return res.json();
    })
    .then((data) => { 
      console.log(data);
      const centers=data.centers;
      console.log(centers);
      let name;
      let address;
      let sessions;
      let dose1;
      let dose2;
      let date;
      let min_age;
      let max_age;
      let vaccine;
      let fees="Paid";
      var temp="";
      // accessing data of each center
      centers.forEach(center=>{
        name=center.name;
        address=center.address;
        sessions=center.sessions;
        // for each center accessing data of each session
        sessions.forEach(session =>{
          dose1=session.available_capacity_dose1;
          dose2=session.available_capacity_dose2;
          date=session.date;
          min_age=session.min_age_limit;
          max_age=session.max_age_limit;
          vaccine=session.vaccine;

          // rendering data on html
          temp += "<tr>";
          temp += "<td style= 'font-size:1.4rem;color:#ff6000'>" + name+ "</td>";
          temp += "<td style= 'color:#ff6000'>" + address+ "</td>";
          temp += "<td style= 'font-size:1.4rem;color:#29527A'>" +date+ "</td>";
          temp += "<td style= 'color: #6D375F;'>" + vaccine + "</td>";
          temp += "<td style= 'color: #CA1655;'>" + fees + "</td>";
          temp += "<td style= 'color: #009688;'>" + dose1 + "</td>";
          temp += "<td style= 'color: #009688;'>" +dose2 + "</td>";
          temp += "<td style= 'color: #f12d2d;'>" +min_age + "</td>";
          temp += "<td style= 'color: #f12d2d;'>" +max_age + "</td></tr>";

        })   
      })
      document.getElementById('data').innerHTML = temp;
      document.querySelector('.tabularData').classList.remove("hide");
      // whenever search is clicked the page will scroll to the provided height
      $(document).scrollTop($(document).height()/2.5);
    })
    .catch((error) => {
      document.querySelector('.errorMessage ').classList.remove("hide");
      console.log('Error:', error);
    });
  }
  api_fetch1(district_id, Date1);
}

// By Pin
function ByPin(){
  var Pin = document.getElementById("search-pin").value;
  const Date2=document.getElementById("date2").value;
  console.log(Pin);
  fetchDataByPIN(Pin, Date2);
}

// fetch Data By PIN
function fetchDataByPIN(Pin,Date2){
  var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

  // Async and Await:
  // async and await make promises easier to write".async makes a function return a Promise.await makes a function wait for a Promise
  const api_fetch1 = async (Pin, Date2) =>{
    date = new Date(Date2);
    date =date.getDate()+'-' + (date.getMonth()+1) + '-'+date.getFullYear();
    console.log(date);
    await fetch(
      "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode="+Pin+"&date="+date+"",requestOptions)
    .then((res) => {
      return res.json();
    })
    .then((data) => { 
      console.log(data);
      const centers=data.centers;
      console.log(centers);
      let name;
      let address;
      let sessions;
      let dose1;
      let dose2;
      let date;
      let min_age;
      let max_age;
      let vaccine;
      let fees="Paid";
      var temp="";
      
      // accessing data of each center
      centers.forEach(center=>{
        name=center.name;
        address=center.address;
        sessions=center.sessions;

        // for each center accessing data of each session
        sessions.forEach(session =>{
          dose1=session.available_capacity_dose1;
          dose2=session.available_capacity_dose2;
          date=session.date;
          min_age=session.min_age_limit;
          max_age=session.max_age_limit;
          vaccine=session.vaccine;
          // rendering data on html
          temp += "<tr>";
          temp += "<td style= 'font-size:1.4rem;color:#ff6000'>" + name+ "</td>";
          temp += "<td style= 'color:#ff6000'>" + address+ "</td>";
          temp += "<td style= 'font-size:1.4rem;color:#29527A'>" +date+ "</td>";
          temp += "<td style= 'color: #6D375F;'>" + vaccine + "</td>";
          temp += "<td style= 'color: #CA1655;'>" + fees + "</td>";
          temp += "<td style= 'color: #009688;'>" + dose1 + "</td>";
          temp += "<td style= 'color: #009688;'>" +dose2 + "</td>";
          temp += "<td style= 'color: #f12d2d;'>" +min_age + "</td>";
          temp += "<td style= 'color: #f12d2d;'>" +max_age + "</td></tr>";
        })
      })
      document.getElementById('data').innerHTML = temp;
      document.querySelector('.tabularData').classList.remove("hide");
      // whenever search is clicked the page will scroll to the provided height
      $(document).scrollTop($(document).height()/2);     
    })
    .catch((error) => {
      document.querySelector('.errorMessage ').classList.remove("hide");
      console.log('Error:', error);
    });
  }
  api_fetch1(Pin, Date2);
}



