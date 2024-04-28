import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Footer from "./Footer";
import vegetable from '../assets/FruitsImg/vegetable.png';
import fruit from '../assets/FruitsImg/fruit.png';

import bg from '../assets/FruitsImg/bg.jpg';


export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % 2); // Toggle between 0 and 1
        }, 5000); // Change 5000 to the duration in milliseconds for switching images

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="bg-cover bg-center lg:w-screen lg:h-screen relative" style={{ backgroundImage: `url(${bg})` }}>
            <Navigation />
            <h1 className="text-4xl font-bold lg:ml-[34rem] lg:mt-[1rem]">Our Menu</h1>
            <div className="flex items-center justify-center h-full">
                {currentImageIndex === 0 && (
                    < img className="lg:w-[40rem] lg:h-[24rem] slide lg:-mt-[15rem]" src={vegetable} alt="vegetable" />
                )}
                {currentImageIndex === 1 && (
                    <img className="lg:w-[40rem] lg:h-[24rem] slide lg:-mt-[15rem]" src={fruit} alt="vegetable" />
                )}

            </div>
            <div className="flex flex-row">

                <Link className='relative rounded-lg border-2 lg:w-[27rem] lg:text-4xl lg:h-[4rem]  lg:ml-[5rem] lg:-mt-[33rem] bg-green-500 text-white' to="/fruits">
                    <button > Get More </button></Link>

                <p className=' relative  lg:w-[52rem] lg:h-[6rem] lg:text-4xl lg:ml-[51rem]  lg:-mt-[33rem]  text-black'>Get Fruits and Vegetable at your doorstep</p>
            </div>

            <Footer />
        </div >
    )
}
