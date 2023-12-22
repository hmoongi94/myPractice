import LikeButton from "./like-button";

function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}

 
export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="React"/>
      <Header title="A new title"/>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}