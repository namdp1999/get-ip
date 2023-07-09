document.querySelector("#form").addEventListener("submit", function(e) {
  // e.preventDefault();
});

fetch("https://api.ipify.org?format=json")
  .then((res) => res.json())
  .then((data) => {
    fetch(`https://ip-api.com/json/${data.ip}`)
      .then((resArea) => resArea.json())
      .then((dataArea) => {
        const dataFinal = {
          dataArea: dataArea,
          country: dataArea.country,
          regionName: dataArea.regionName,
          isp: dataArea.isp,
          lat: dataArea.lat,
          lon: dataArea.lon,
          query: dataArea.query,
          ip: data.ip,
          date: new Date(),
        };

        document.querySelector("#dataArea").value = JSON.stringify(dataFinal);
        document.querySelector("#country").value = dataArea.country;
        document.querySelector("#regionName").value = dataArea.regionName;
        document.querySelector("#isp").value = dataArea.isp;
        document.querySelector("#lat").value = dataArea.lat;
        document.querySelector("#lon").value = dataArea.lon;
        document.querySelector("#query").value = dataArea.query;
        document.querySelector("#ip").value = data.ip;
        document.querySelector("#date").value = new Date();
        document.querySelector("#btnSubmit").click();
      });
  });
