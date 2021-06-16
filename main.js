

const getData = async id => {
        const url = 'https://api.covid19api.com/summary';
        const res = await fetch(url);
        const data = await  res.json();
        
        dataEntry(data);
    
        
 }


const newCases = document.getElementById('new-cases-box');
const newRecoveries = document.getElementById('new-recovered-cases');
const newDeaths = document.getElementById('new-reported-deaths');



getData();

dataEntry = (data) => {
    newCases.innerText = data.Global.NewConfirmed;
    newCases.style.color = 'black';
    newRecoveries.innerText = data.Global.NewRecovered;
    newRecoveries.style.color = 'green';
    newDeaths.innerText = data.Global.NewDeaths;
    newDeaths.style.color = 'red';
}



