import '../style/card.css'

export default function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Learn More</button>
      </div>
    </div>
  );
}
