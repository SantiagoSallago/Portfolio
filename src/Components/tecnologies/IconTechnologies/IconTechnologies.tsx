import './IconTechnologies.css';
import './IconTechnologiesResponsive.css'

type Props = {
    icon: string;
    text: string;
}

const IconTechnologies = ({ icon, text }: Props) => {
    return (
        <div className='CardIcon'>
            <img src={icon} alt="" className='techIcon' />
            <p>{text}</p>
        </div>
    )
}

export default IconTechnologies;
