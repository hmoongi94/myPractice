import React, { useEffect, useState } from 'react';

const SubscriptionExample = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 가상의 비동기 데이터 가져오기
    const fetchData = async () => {
      try {
        // 데이터를 가져오는 비동기 작업을 수행 (예: API 호출)
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // 데이터 가져오기 함수 호출
    fetchData();

    // Clean-up 함수 (Unmount 시에 실행됨)
    return () => {
      console.log('Clean-up function is running!');
      // 여기에 필요한 정리 작업을 추가할 수 있음
    };
  }, []); // 의존성 배열이 비어있으므로 컴포넌트가 마운트될 때 한 번만 실행

  return (
    <div>
      <h1>Subscription Example</h1>
      {data ? (
        <div>
          <p>Title: {data.title}</p>
          <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default SubscriptionExample;