
import { Link } from 'react-router-dom';
import logo from '../assets/FruitsImg/mineimg.jpeg';
import { FaSearch } from "react-icons/fa";
function Navigation() {
    return (
        <nav>
            <div className="flex lg:p-10 bg-green-400 text-black ">
                <img className=' flex' width='50px' height='50px' src={logo} alt="Logo" />
                <p className='text-2xl font-bold flex'> <b className='lg:text-4xl text-green-700  italic font-bold'>B</b>ik <b className='lg:text-4xl text-green-700 italic font-bold'>A</b>pp</p>

                <ul className=' relative flex lg:gap-14  gap-4  lg:text-lg  ml-20 font-bold lg:ml-[50rem] cursor-pointer '>

                    <li className='flex items-center  hover:text-green-700 transition-colors duration-300 '>
                        <div className="flex   ">
                            <Link to="/">
                                <FaSearch className="hidden lg:block lg:-ml-5 outline-none" />
                                < textarea className=' lg:-ml-[13rem] lg:-mt-7 flex lg:w-[14rem] w-[5rem] -mt-5 h-[2rem] border-2 -ml-14  rounded-lg lg:h-10 bg-slate-200' placeholder=" Product Search" />
                            </Link>

                        </div>

                    </li>
                    <li className='mt-2 -ml-2 '>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className='mt-2 -ml-2 '>
                        <Link to="/about">About</Link>
                    </li>


                    <li className='mt-2 -ml-2 '>
                        <Link to="/login">Login</Link>
                    </li>

                </ul>
            </div>
        </nav >
    );
}

export default Navigation;
