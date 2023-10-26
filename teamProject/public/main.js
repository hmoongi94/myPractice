document.addEventListener('DOMContentLoaded', function () {
  const dataToSend = document.getElementById('dataToSend');

  dataToSend.addEventListener('click', function () {
      const data = dataToSend.textContent;

      fetch('/send-data', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ data })
      })
      .then(response => response.json())
      .then(data => {
          console.log('서버로부터 응답:', data);
      })
      .catch(error => {
          console.error('에러 발생:', error);
      });
  });
});