/* eslint-disable react/jsx-key */

import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast.error('Already selected', {
                position: toast.POSITION.TOP_CENTER, // Centered at the top
              });
        }
        else{

            selectedCourse.forEach((item => {
                CreditCount = CreditCount + item.credit
            }))

            selectedCourse.forEach((item => {
                PriceCount = PriceCount + item.price
            }))

            const remaining = 20 - CreditCount;
            
            if(CreditCount > 20){
               return toast.error('Your Credit is over', {
                    position: toast.POSITION.TOP_CENTER, 
                  });
            }
            
            if( PriceCount > 123000){
                return toast.error('Not enough money', {
                    position: toast.POSITION.TOP_CENTER, 
                  });
            }

            setRemainingCredit(remaining);
            setTotalCredit(CreditCount)
            setTotalPrice(PriceCount);
            setSelectedCourse([...selectedCourse, course]);
        }
       

      
 

    }


    return (
        <main className='max-w-screen-xl mx-auto  px-4 md:px-8 lg-px-12 py-1 md:py-4 '>
            <h3 className='text-2xl md:text-4xl  font-bold text-center mt-6 mb-10'>Course Registration</h3>
            <div className='flex flex-col bg-orange-100 md:flex-row fle md:gap-5 justify-between md:items-start items-center space-y-3'>
                <div className='md:w-3/4   card-container grid gap-4 lg:grid-cols-3 '>
                    {
                        allCourses.map(course => (
                            <div key={course.id} className='   card p-3 bg-[#FFF] rounded-md space-y-2'>
                                <img className='w-full rounded-md' src={course?.img} alt="" />
                                <h3 className='text-[#1C1B1B] font-bold'>{course?.title}</h3>
                                <p className='text-gray-500'>{course?.details}</p>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$ Price: {course?.price}</p>
                                    <p className='font-semibold'>Credit: {course?.credit}</p>
                                </div>
                                <button onClick={() => handleSelectCourse(course)}  className='text-center text-white font-semibold py-2 rounded-md w-full bg-[#2F80ED]'>Selact</button>
                                <ToastContainer/>
                            </div>
                        ))
                    }
                </div>
                <div className='md:w-1/4 w-full p-3 bg-[#FFF] rounded-md  cart'>
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