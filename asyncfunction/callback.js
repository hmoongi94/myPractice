function fetchDataFromServer(callback, errorCallback) {
  setTimeout(() => {
    try {
      // 비동기 작업 수행
      const data = 'Data from server';
      console.log('Data received from server:', data);

      // 작업 완료 후 콜백 호출
      callback(data);
    } catch (error) {
      // 에러가 발생하면 errorCallback 호출
      errorCallback(error);
    }
  }, 1000);
}

// 사용 예시
fetchDataFromServer(
  (data) => {
    console.log('Callback executed with data:', data);
  },
  (error) => {
    console.error('Error:', error);
  }
);