import logo from '../assets/FruitsImg/mineimg.jpeg';

export default function Footer() {
    return (
        <>

            <footer className="bg-green-500 py-4 -mt-[11rem] lg:h-[13rem] ">

                <div className=" gap-[3rem] container mx-auto flex flex-col">
                    <div className="flex ">
                        <img className=' flex' width='50px' height='50px' src={logo} alt="Logo" />
                        <p className='text-2xl font-bold flex'> <b className='lg:text-4xl text-green-700  italic font-bold'>B</b>ik <b className='lg:text-4xl text-green-700 italic font-bold'>A</b>pp</p>
                    </div>
                    <ul className="flex text-left gap-[3rem] cursor-pointer lg:ml-[50rem] text-2xl lg:-mt-[4rem] ">
                        <il className="cursor-pointer hover:underline">Product</il>
                        <il className="cursor-pointer hover:underline">Vegetable</il>
                        <il className="cursor-pointer hover:underline">Fruits</il>
                        <il className="cursor-pointer hover:underline">Login</il>
                    </ul>
                    <div className="flex flex-col  text-2xl lg:-mt-[2rem]">
                        <p>Email: <a href="mailto:clarisse21445@gmail.com" className="text-white hover:underline">clarisse21445@gmail.com</a></p>
                        <p> WhatApp: <a href="tel:+250781796283" className="text-white hover:underline">+250781796283</a></p>
                        <p> Location: <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" className="text-white hover:underline">No 123, Street, City</a></p>
                    </div>
                    <div className="container mx-auto text-center text-xl lg:ml-[26rem] lg:-mt-[5rem] text-white">
                        <p>&copy; 2024 Your Company. All rights reserved.</p>
                    </div>
                </div>

            </footer>
        </>
    )
}
