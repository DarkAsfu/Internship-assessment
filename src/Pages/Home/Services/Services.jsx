import { useEffect, useState } from "react";
import Card from "../Card/Card";
const Services = () => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch('https://internship-assesment-server-darkasfu.vercel.app/service')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    // console.log(services);
    return (
        <div className='my-20 w-11/12 md:w-10/12 mx-auto'>
            <div className='md:flex justify-between items-center'>
                <h1 className='capitalize text-[34px] md:text-[48px] font-serif font-extrabold'>How Can <br />we Help you?</h1>
                <div>
                    <button className='btn bg-[#222222] hover:bg-[#FF4A17] ease-in transition-all text-white uppercase px-6 py-3 md:px-10 md:py-4'>View all industries</button>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-10 mt-10">
                {
                    services.map(service => <Card key={service.id} service={service}></Card>)
                }
            </div>
        </div>
    );
};

export default Services;