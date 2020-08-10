// class Forex{
//   constructor(){
//     let rates, new_rates;
//   }

//   // check if rate is even number
//   checkIfEven(rate){
//     return rate % 2 == 0 ? true : false;
//   }
// }

   // get data from sending http request
function getRates(){
  return fetch("http://data.fixer.io/api/latest?access_key=fe3a9b3f9ac173a3e51d8ea22951cf95")
      .then(response => {
      if(!response.ok){throw new Error("RESPONSE ERROR");}
      else{return response.json();}
      })
      .then(data => {
        var currency = Object.keys(data.rates)
        var rate = Object.values(data.rates)
        var sec_rate = rate.map(function(val){return val+10.0002;});
        console.log(currency);
        console.log(rate);
        console.log(sec_rate);
        var table = ""
        for(i=0; i<currency.length; i++){
          table += (`
            <tr>
              <td>${currency[i]}</td>
              <td>${rate[i]}</td>
              <td>${sec_rate[i]}</td>
            </tr>`
          );
        }
        console.log(table)
        document
          .querySelector("#forex")
          .insertAdjacentHTML("beforeend", table)
      })
      .catch(error => console.error(error));
}
// var forex = new Forex();
// forex.rates = getRates()
// console.log(forex.rates)
  
getRates()