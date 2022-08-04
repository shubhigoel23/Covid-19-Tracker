function myFunction(x) {
    x.classList.toggle("change");
    $('.navbar').toggleClass('nav-toggle');
  }

// fetching data 
fetch("https://api.rootnet.in/covid19-in/stats/latest").then(
    res => {
      res.json().then(
        data => {
          console.log(data);
          // last updated 
          const last_updated=data.lastOriginUpdate;
          date = new Date(last_updated);
          const formatted_last_updated =(date.getDate()-10)+'-' + (date.getMonth()+4) + '-'+date.getFullYear();
          console.log(formatted_last_updated);
          const LastUpdates=document.querySelector('.last-updated');
          LastUpdates.innerText+= ` ${formatted_last_updated}`;

          console.log(data.data);
    
          // total summary of cases in india
          const summary=data.data.summary;
          const total_cases=summary.total;
          const recovered_cases=summary.discharged;
          const death_cases=summary.deaths;
          const active_cases=total_cases-(recovered_cases+death_cases);

          const TotalCases =document.querySelector('.total-cases .value');
          TotalCases.innerText= ` ${total_cases}`;

          const RecoveredCases =document.querySelector('.recovered .value');
          RecoveredCases.innerText= ` ${recovered_cases}`;

          const DeathCases =document.querySelector('.deaths .value');
          DeathCases.innerText= ` ${death_cases}`;

          const ActiveCases =document.querySelector('.active .value');
          ActiveCases.innerText= ` ${active_cases}`;

          // state wise case summary
          const States=data.data.regional;
          console.log(States);
          if (States.length > 0) {
          var temp = "";
          States.forEach((state) => {
              console.log(state);
              const location=state.loc;
              const recovered=state.discharged;
              const{totalConfirmed,deaths}=state;
              const active=totalConfirmed-(recovered+deaths);

              temp += "<tr>";
              temp += "<td style= 'font-size:1.4rem;color:#ff6000'>" + location+ "</td>";
              ` <h4 >${total_cases}</h4>`
              temp += "<td style= 'color: #CA1655;'>" + totalConfirmed.toLocaleString() + "</td>";
              temp += "<td style= 'color: #1d4e89;'>" + active.toLocaleString() + "</td>";
              temp += "<td style= 'color: #009688;'>" + recovered.toLocaleString() + "</td>";
              temp += "<td style= 'color: #f12d2d;'>" + deaths.toLocaleString() + "</td></tr>";
              
            });
            document.getElementById('data').innerHTML = temp;
          }
        }
      )
    }
  )
  