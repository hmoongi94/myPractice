import { useState } from "react";

function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}

 
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = React.useState(0)

  function handleClick() {
    setLikes(likes+1)
    console.log(likes)
  }

  return (
    <div>
      <Header title="React"/>
      <Header title="A new title"/>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like</button>
    </div>
  );
}