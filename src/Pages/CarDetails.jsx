import { useLoaderData } from 'react-router';

const CarDetails = () => {
    const car = useLoaderData()
    return (
        <div>
            <h2>car name : {car.carName}</h2>
        </div>
    );
};

export default CarDetails;