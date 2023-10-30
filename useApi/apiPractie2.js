export function getWeatherJejuData() {
  // OpenWeatherMap API 키
  const apiKeyjeju = '13e787bc80632c2e192c0e6abff23bee'; // 본인의 API 키로 대체해야 합니다.
  // 도시 이름
  const jeju = 'jeju'; // 원하는 도시로 변경할 수 있습니다.
  // API 요청을 보내고 데이터를 가져옵니다.
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${jeju}&appid=${apiKeyjeju}&units=metric`)
      .then(response => response.json())
      .then(data => {
          const jejuTemp = data.main.temp; // 온도
          const jejuHumi = data.main.humidity; // 습도
          return { jejuTemp, jejuHumi };
      })
      .catch(error => {
          console.error("날씨 정보를 가져오는데 실패했습니다.", error);
      });
}