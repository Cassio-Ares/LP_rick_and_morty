import "./Card.css";

const Card = ({ data }) => {
  console.log(data);

  return (
    <section className="card">
      <figure>
        <div className="img_card">
          <img src={data.image} alt="" />
        </div>
      </figure>
      <div className="text"> 
        <h4>Nome: <span>{data.name}</span></h4>
        <h4>Espécie: <span>{data.species}</span></h4>
        <h4>Gênero: <span>{data.gender}</span></h4>
        <h4>Status: <span>{data.status}</span></h4> 
        <h4>Origem: <span>{data.origin.name}</span></h4>
      </div>
        
    </section>
  );
};

export default Card;
