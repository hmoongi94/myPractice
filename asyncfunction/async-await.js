function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = 'Data from server';
      console.log('Data received from server:', data);
      resolve(data);
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `Processed: ${data}`;
      console.log('Data processed:', processedData);
      resolve(processedData);
    }, 1000);
  });
}

async function fetchDataAndProcess() {
  try {
    const data = await fetchData();
    const processedData = await processData(data);
    console.log('Final result:', processedData);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchDataAndProcess();