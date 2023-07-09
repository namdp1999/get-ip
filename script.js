document.querySelector("#form").addEventListener("submit", function(e) {
  // e.preventDefault();
});

fetch("https://api.ipify.org?format=json")
  .then((res) => res.json())
  .then((data) => {
    fetch(`https://www.iplocate.io/api/lookup/${data.ip}?apikey=08cc5844974d8b2d733db929352a9b13`)
      .then((resArea) => resArea.json())
      .then((dataArea) => {
        const dataFinal = {
          dataArea: dataArea,
          country: dataArea.country,
          regionName: `${dataArea.city} | ${dataArea.subdivision} | ${dataArea.subdivision2}`,
          isp: dataArea.org,
          lat: dataArea.latitude,
          lon: dataArea.longitude,
          query: dataArea.ip,
          ip: data.ip,
          date: new Date(),
        };

        document.querySelector("#dataArea").value = JSON.stringify(dataFinal);
        document.querySelector("#country").value = dataArea.country;
        document.querySelector("#regionName").value = `${dataArea.city} | ${dataArea.subdivision} | ${dataArea.subdivision2}`;
        document.querySelector("#isp").value = dataArea.org;
        document.querySelector("#lat").value = dataArea.latitude;
        document.querySelector("#lon").value = dataArea.longitude;
        document.querySelector("#query").value = dataArea.ip;
        document.querySelector("#ip").value = data.ip;
        document.querySelector("#date").value = new Date();
        document.querySelector("#btnSubmit").click();
      });
  });
