fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    fetch(`http://ip-api.com/json/${data.ip}`)
      .then(resArea => resArea.json())
      .then(dataArea => {
        const dataFinal = {
          dataArea: dataArea,
          country: dataArea.country,
          regionName: dataArea.regionName,
          isp: dataArea.isp,
          lat: dataArea.lat,
          lon: dataArea.lon,
          query: dataArea.query,
          ip: data.ip,
          date: new Date()
        };
        console.log('Thông tin vị trí:', dataArea);
        console.log('Quốc gia:', dataArea.country);
        console.log('Tỉnh/thành phố:', dataArea.regionName);
        console.log('Nhà mạng đang sử dụng:', dataArea.isp);
        console.log('Vị độ:', dataArea.lat);
        console.log('Kinh độ:', dataArea.lon);
        console.log('Địa chỉ IP:', dataArea.query);
        console.log('Địa chỉ IP (check lần 2):', data.ip);
        console.log('Truy cập lúc:', new Date());
        console.log(dataFinal);
      })
  })