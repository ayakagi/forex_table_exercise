// get data from sending http request
function getRates(){
  return fetch("http://data.fixer.io/api/latest?access_key=fe3a9b3f9ac173a3e51d8ea22951cf95")
    .then(response => {
      if(!response.ok){throw new Error("RESPONSE ERROR");}
      else{return response.json();}
    })
    .then(data => {
      // variable that will be used in table
      var currency = Object.keys(data.rates)
      var rate = Object.values(data.rates)
      var sec_rate = rate.map(function(val){return val+10.0002;});
      var table = ""
      
      for(i=0; i<currency.length; i++){
        // check if currency is HKD or rate is even number
        // change its border color to red
        var color1 = color2 = color3 = "";
        if(currency[i]=="HKD"){color1=' class="red"'};
        if(rate%2==0){color2=' class="red"'};
        if(sec_rate%2==0){color3=' class="red"'}
        // initialize html code
        table += (`
          <tr>
            <td${color1}>${currency[i]}</td>
            <td${color2}>${rate[i]}</td>
            <td${color3}>${sec_rate[i]}</td>
          </tr>
        `);
      }
      document
        .querySelector("#forex")
        .insertAdjacentHTML("beforeend", table)
    })
    .catch(error => console.error(error));
}
  
getRates()