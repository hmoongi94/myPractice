document.addEventListener('DOMContentLoaded', function () {
  fetch('/get-data')
  .then(response => response.json())
  .then(data => {
      const displayData = document.getElementById('displayData');
      displayData.textContent = data.data;
  })
  .catch(error => {
      console.error('에러 발생:', error);
  });
});