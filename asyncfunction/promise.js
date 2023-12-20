function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Data from server';
      console.log('Data received from server:', data);
      resolve(data);
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `Processed: ${data}`;
      console.log('Data processed:', processedData);
      resolve(processedData);
    }, 1000);
  });
}

fetchData()
  .then((data) => processData(data))
  .then((processedData) => console.log('Final result:', processedData))
  .catch((error) => console.error('Error:', error));