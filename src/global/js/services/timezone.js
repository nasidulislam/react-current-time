const timezone = {
  get: async function(lat, long) {
    const location = lat + ", " + long;
    const date = new Date();
    const timestamp = date.getTime() / 1000 + date.getTimezoneOffset() * 60;
    const key = "AIzaSyBs8qlWrkO3HjZOlFkf673k0rPJJY5MAO8";
    const queryStr =
      "https://maps.googleapis.com/maps/api/timezone/json?location=" +
      location +
      "&timestamp=" +
      timestamp +
      "&key=" +
      key;

    // let response = await fetch(queryStr);
    // return await response.json();
    let response = await (await fetch(queryStr)).json();
    return [response, timestamp];

    // await (await fetch(queryStr)).json().then(response => {
    // const offsets = response.dstOffset * 1000 + response.rawOffset * 1000;
    // const localdate = new Date(timestamp * 1000 + offsets);
    // console.log(localdate.toLocaleString());
    //   return localdate.toLocaleString();
    // });
  }
};

export default timezone;
