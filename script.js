function setHistory(newHistory = { id: '', name: '', nextDataSet: {} }) {
  // call update history functions when certain conditions are satisfied
  function updateHistory() {
    // create function to update history in html
  }
}
setHistory();
const API_KEY = '';
var DateTime = luxon.DateTime;

/// search button triggers fetch request
document
  .querySelector('#search-btn')
  .addEventListener('click', async () => await fetchWeatherData());

async function fetchCoordinates() {
  // let city = document.querySelector('#search').value;
  // if (city === '' && window.localStorage.getItem('active-id') !== null)
  //   return null;
  // else if (city === '' && window.localStorage.getItem('active-id') === null) {
  //   city = 'atlanta';
  // }
  // const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
  // first API call
  // const response = await fetch(url)
  //   .then((res) => res.json())
  //   .then((json) => json)
  //   .catch((err) => err);
  // const [data] = response;
  // const { lon, lat } = data;
  // return {
  //   lon,
  //   lat,
  // };
}
async function fetchWeatherData() {
  // const cod = await fetchCoordinates();
  // if (cod === null) return;
  // const { lon, lat } = cod;
  // if (!lon || !lat) return;
  // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  // second API call
  // const response = await fetch(url)
  //   .then((res) => res.json())
  //   .then((json) => json)
  //   .catch((err) => err);
  // const { id, name } = response;
  // if (!id) return;
  // const url_forecast = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${API_KEY}`;
  // third API call
  // const forecast = await fetch(url_forecast)
  //   .then((res) => res.json())
  //   .then((json) => json)
  //   .catch((err) => err);
  // const { list } = forecast;
  // const [currentWeather] = list;
  // const { dt_txt } = currentWeather;
  // let nextDataSet = {};
  // list.forEach((each) => {
  //   const forecast_date = each.dt_txt;
  //   let end = DateTime.fromISO(forecast_date.split(' ')[0]);
  //   let start = DateTime.fromISO(dt_txt.split(' ')[0]);
  //   let { days } = end.diff(start, 'days').toObject();
  //   if (Number(days) === 1 && !nextDataSet.day2) {
  //     nextDataSet.day2 = each;
  //   } else if (Number(days) === 2 && !nextDataSet.day3) {
  //     nextDataSet.day3 = each;
  //   } else if (Number(days) === 3 && !nextDataSet.day4) {
  //     nextDataSet.day4 = each;
  //   } else if (Number(days) === 4 && !nextDataSet.day5) {
  //     nextDataSet.day5 = each;
  //   } else return;
  // });
  // nextDataSet = { ...nextDataSet, day1: currentWeather };
  // setHistory({ id, name, nextDataSet });
}

function setForecastDisplay(obj) {
  // set active forecast data.
}

// call fetch weather data to kickstart the project as long as there is no active city id.
if (window.localStorage.getItem('active-id') === null) fetchWeatherData();
