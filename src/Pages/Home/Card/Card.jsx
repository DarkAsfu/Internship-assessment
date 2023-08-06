import { BsArrowRight } from "react-icons/bs";
const Card = ({service}) => {
    return (
        <div className="card bg-black opacity-80 shadow-xl image-full">
            <figure><img  src={service.image} alt="Shoes" /></figure>
            <div className="card-body -mt-[300px] text-center p-10">
                <div className="card-actions flex justify-center mb-10">
                    <img className="w-10" src={service.icon} alt="" />
                </div>
                <h2 className="card-title text-black font-bold text-3xl">{service.title}</h2>
                <BsArrowRight className="text-4xl text-white mx-auto"></BsArrowRight>
            </div>
        </div>
    );
};

export default Card;