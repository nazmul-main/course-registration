/* eslint-disable react/jsx-key */

import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {

    const [allCourses, setAllCourses] = useState([]);
    const [selectedActor, setSelectedActor] =  useState([]);


    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, []);

    const handleSelectCourse = (actor) => {
       setSelectedActor([...selectedActor, actor])
    }
    console.log(selectedActor);




    return (
        <main className='max-w-screen-xl mx-auto  px-4 md:px-8 lg-px-12 py-1 md:py-4 '>
            <h3 className='text-4xl font-bold text-center mb-6'>Course Registration</h3>
            <div className='flex md:gap-5  items-start bg-lime-50'>
                <div className='  card-container grid gap-4 lg:grid-cols-3 '>
                    {
                        allCourses.map(actor => (
                            <div key={actor.id} className='w-72 card p-3 bg-red-50 rounded-md'>
                                <img className='rounded-md' src={actor?.img} alt="" />
                                <h3 className='text-[#1C1B1B] font-bold text-xl'>{actor?.title}</h3>
                                <p>{actor?.details}</p>
                                <div className='flex justify-between'>
                                    <p>$ Price: {actor?.price}</p>
                                    <p>Credit: {actor?.credit}</p>
                                </div>
                                <button  className='text-center text-white font-semibold py-2 rounded-md w-full bg-[#2F80ED]'>Selact</button>
                            </div>
                        ))
                    }
                </div>
                <div className='cart'>
                    <Cart></Cart>
                </div>
            </div>
        </main>
    );
};

export default Home;