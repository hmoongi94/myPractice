// 필요한 변수 설정 const apiKey = 'YOUR_API_KEY'; 
// 본인의 API 키로 대체 const city = 'Seoul'; 
// 원하는 도시명으로 변경 가능 

// API 요청 
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`) 
.then(response => response.json()) 
.then(data => { 
const temperature = data.main.temp; 
// 온도 
const humidity = data.main.humidity; 
// 습도 
console.log(`도시: ${city}`); 
console.log(`온도: ${temperature}°C`); 
console.log(`습도: ${humidity}%`); }) 

.catch(error => { console.error("날씨 정보를 가져오는데 실패했습니다.", error); }); 