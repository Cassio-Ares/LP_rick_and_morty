import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { RickMorty } from "../../api/rickAndMorty";
import './Home.css'

const Home = () => {
  const [dataCharacters, setDataCharacters] = useState([]);

  async function getcharacter() {
    const {
      data: { results },
    } = await RickMorty.getCharacters();

    setDataCharacters(results);
  }

  useEffect(() => {
    getcharacter();
  }, []);


  return (
    <main className="home">
      {dataCharacters.map((character) => (
        <div key={character.id}>
          <Card data={character} />
        </div>
      ))}
    </main>
  );
};

export default Home;
