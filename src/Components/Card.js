// let imagepath = '../images/photo_1.png'

// import Image1 from '{imagepath}'

export default function Card(props) {
  
console.log(props)
  return (
    <div className="card">
     <img src={ require('../images/photo_1.png') } />
      <div className="card-stats">
        <img src={props.star} alt="" className="card-star" />

        <span>({props.rating})</span>
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
