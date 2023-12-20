import React, { useEffect, useState } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  // 의존성 배열에 count를 추가
  useEffect(() => {
    console.log(`Effect is running! Count: ${count}`);

    // Clean-up 함수 (Unmount 시에 실행됨)
    return () => {
      console.log('Clean-up function is running!');
    };
  }, [count]); // count가 변경될 때마다 useEffect 재실행

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default ExampleComponent;

