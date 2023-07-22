

export const TechCards = ({title, img}) => {
    return (
        <>
           <li> 
            <img src={img} alt="#" />
            <h3>{title}</h3>
            </li>
        </>
    )
}