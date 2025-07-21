import { useEffect, useState } from "react";
import { Link } from "react-router";
import Card from "../../components/Card/Card";

function HomePage() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [data, setData] = useState<Weapon[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}/api/weapon`)
      .then((res) => res.json())
      .then((weapon) => setData(weapon));
  }, []);

  return (
    <main className="app">
      {data.map((el) => (
        <Link key={el.id} to={`/detail/${el.id}`}>
          <Card name={el.name} image={el.image} />
        </Link>
      ))}
    </main>
  );
}

export default HomePage;
