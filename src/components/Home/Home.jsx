import Cart from '../Cart/Cart';

const Home = () => {

    

    





    return (
        <main className='max-w-screen-xl mx-auto  px-4 md:px-8 lg-px-12 py-1 md:py-4 '>
            <h3 className='text-4xl font-bold text-center'>Course Registration</h3>
            <div className='flex gap-5 justify-between items-center '>
                <div className=' card-container grid lg:grid-cols-3 '>
                    <div className='card p-4 bg-red-50 rounded-md'>
                        <img className='rounded-md' src="https://i.ibb.co/xJdKwQL/90325682.webp" alt="" />
                        <h3 className='text-[#1C1B1B] font-bold text-xl'>Introduction to C Programming</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layou</p>
                        <div className='flex justify-between'>
                            <p>$ Price:</p>
                            <p>Credit: </p>
                        </div>
                        <button className='text-center text-white font-semibold py-2 rounded-md w-full bg-[#2F80ED]'>Selact</button>
                    </div>
                </div>
                <div className='cart flex-1'>
                <Cart></Cart>
                </div>
            </div>
        </main>
    );
};

export default Home;