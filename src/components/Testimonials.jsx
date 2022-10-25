 import Star from "./Star.jsx"
const Testimonials = ( { star, content, name , lastName,image } ) => {

    return (

        <div className="cont">
            {
                star.map(e => <Star/>)
            }
            <p className="content">
                {content}
            </p>
            <div>
                <img className="profile" src={image} alt={image} /> <span className="name"><span >{name} <span >{lastName}</span></span></span>

            </div>
        </div>
    )

}

export default Testimonials
