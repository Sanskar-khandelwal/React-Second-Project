import photogrid from '../images/Photo_grid.png'


export default function Hero(){
    return (
        <div className="hero section">
            <img className='grid' src= {photogrid} alt=""  />
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home</p>
        </div>
    )

}