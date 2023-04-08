let btn = document.querySelector("button");

btn.addEventListener("click", (getTemp) => {
  let zipCode = document.querySelector("input").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=6242f7fca6edd44b42ebd248c6ee1f56&units=imperial`;
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.main);
      document.querySelector("#temp").innerText = data.main.temp;
      document.querySelector("#feels_like").innerText =
        data.main.feels_like;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
});
