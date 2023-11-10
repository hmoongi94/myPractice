// 가공 함수
function processData(data, callback) {
  // 데이터 가공 로직...
  const processedData = data.map(item => item * 2);

  // 가공된 데이터를 콜백 함수에 전달
  callback(null, processedData);
}

// 데이터를 제공하는 비동기 함수
function fetchData(callback) {
  // 비동기적으로 데이터를 가져오는 로직...
  setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    callback(null, data);
  }, 1000);
}

// 데이터를 제공하는 함수 호출 후, 가공 함수에 콜백 함수 전달
fetchData((error, data) => {
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  processData(data, (err, processedData) => {
    if (err) {
      console.error('Error processing data:', err);
      return;
    }

    console.log('Processed Data:', processedData);
  });
});