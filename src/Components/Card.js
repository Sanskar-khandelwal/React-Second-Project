import Image1 from '../images/photo_1.png'


export default function Card(props) {
  
console.log(props)
  return (
    <div className="card">
      <img src= {Image1} alt="" className="card-image" />
      <div className="card-stats">
        <img src={props.star} alt="" className="card-star" />

        <span>{props.rating}</span>
        <span className="gray"> {props.reviewCount} • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> /person
      </p>
    </div>
  );
}