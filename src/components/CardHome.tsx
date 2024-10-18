import { PropsCardDetails } from "@/types/types";
import "../styles/card-home.css";
import Image from "next/image";

const CardHome = ({item}: PropsCardDetails): JSX.Element => {
  return (
    <div className='container-card-details'>
        <div className='card-details-text'>
            <h3 className='card-details-title'>{item.title}</h3>
            <p className='card-details-desc'>{item.description}</p>
        </div>
        <Image src={item.image} alt={item.title} width={500} height={350} />
    </div>
  )
}

export default CardHome