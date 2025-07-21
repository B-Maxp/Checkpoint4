import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

function HomePage() {
  const [data, setData] = useState<Weapon[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/weapon")
      .then((res) => res.json())
      .then((weapon) => setData(weapon));
  }, []);

  return (
    <main className="app">
      {data.map((el) => (
        <Card key={el.name} name={el.name} image={el.image} />
      ))}
    </main>
  );
}

export default HomePage;
