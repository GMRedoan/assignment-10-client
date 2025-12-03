import React, { use, useState } from 'react';
import NewCarsCard from '../Components/homeLayout/NewCarsCard';
import Feedback from '../Components/homeLayout/Feedback';
import Loading from './Loading';
import { IoSearchOutline } from 'react-icons/io5';

const allCarsPromise = fetch('https://rent-wheels-server-jet.vercel.app/cars')
    .then(res => res.json())
const AllCars = () => {
    const allCars = use(allCarsPromise)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const filterCar = allCars.filter(car => car.carName.toLowerCase().includes(search.toLowerCase()))
    const handleLoading = (value) => {
        setLoading(true)
        setSearch(value)

        setTimeout(() => {
            setLoading(false);
        }, 300)
    }

    return (
        <div>
            <title>Browse Cars</title>
            <div className='px-4'>
                <h2 className='text-4xl md:text-6xl font-bold text-center py-10 md:pt-20'>Browse Our <span className='text-primary'>Premium</span> Car Collection</h2>
                <p className='text-accent font-semibold text-center'>Find the perfect ride for any trip with our full range of reliable, well-maintained vehicles.</p>
            </div>

            <div className='flex justify-between items-center mx-22 pt-10'>
                <p></p>
                <label className="input border border-gray-300 outline-primary">
                    <IoSearchOutline />
                    <input
                        type="search"
                        required 
                        placeholder="Search Your Car"
                        value={search}
                        onChange={(e) => handleLoading(e.target.value)}
                    />
                </label>

            </div>
            {
                loading ?
                    <Loading></Loading> :
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto py-10 px-4">
                        {
                            filterCar.map(car => <NewCarsCard key={car._id} car={car}></NewCarsCard>)
                        }
                    </div>
            }
            <Feedback></Feedback>
        </div>
    );
};

export default AllCars;