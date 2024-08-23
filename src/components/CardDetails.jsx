import Link from 'next/link'
import "../styles/CardDetails.css";

const CardDetails = ({item}) => {
  return (
    <div className='container-card-details'>
        <div className='card-details-text'>
            <h3 className='card-details-title'>{item.title}</h3>
            <p className='card-details-desc'>{item.description}</p>
        </div>
        <img src={item.image.src} alt={item.title} width={500} height={350}  />
    </div>
  )
}

export default CardDetails