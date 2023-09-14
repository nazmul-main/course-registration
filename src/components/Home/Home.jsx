/* eslint-disable react/jsx-key */

import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {

    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] =  useState([]);
    const [totalPrice, setTotalPrice] = useState([]);
    const [totalCredit, setTotalCredit] = useState([]);
    const [remainingCredit, setRemainingCredit] = useState([]);



    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, []);

    const handleSelectCourse = (course) => {
        const isExit = selectedCourse.find(item => item.id === course.id)

        let PriceCount = course.price;
        let CreditCount = course.credit;


        if(isExit){
            return alert('Selected Alredy')
        }
        else{

            selectedCourse.forEach((item => {
                CreditCount = CreditCount + item.credit
            }))

            selectedCourse.forEach((item => {
                PriceCount = PriceCount + item.price
            }))

            const remaining = 20 - CreditCount;
            setRemainingCredit(remaining);

            setTotalCredit(CreditCount)
            setTotalPrice(PriceCount);
            setSelectedCourse([...selectedCourse, course]);
        }
       

      
 

    }


    return (
        <main className='max-w-screen-xl mx-auto  px-4 md:px-8 lg-px-12 py-1 md:py-4 '>
            <h3 className='text-4xl font-bold text-center mb-6'>Course Registration</h3>
            <div className='flex md:gap-5 justify-evenly items-start'>
                <div className='  card-container grid gap-4 lg:grid-cols-3 '>
                    {
                        allCourses.map(course => (
                            <div key={course.id} className='w-72 card p-3 bg-[#FFF] rounded-md'>
                                <img className='rounded-md' src={course?.img} alt="" />
                                <h3 className='text-[#1C1B1B] font-bold text-xl'>{course?.title}</h3>
                                <p>{course?.details}</p>
                                <div className='flex justify-between'>
                                    <p>$ Price: {course?.price}</p>
                                    <p>Credit: {course?.credit}</p>
                                </div>
                                <button onClick={() => handleSelectCourse(course)}  className='text-center text-white font-semibold py-2 rounded-md w-full bg-[#2F80ED]'>Selact</button>
                            </div>
                        ))
                    }
                </div>
                <div className='cart'>
                    <Cart 
                    selectedCourse={selectedCourse} 
                    totalPrice={totalPrice}
                    totalCredit={totalCredit}
                    remainingCredit={remainingCredit}
                    ></Cart>
                </div>
            </div>
        </main>
    );
};

export default Home;