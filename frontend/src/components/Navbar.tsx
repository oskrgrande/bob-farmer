import Logo from '@/assets/logo.webp';
import Avatar from '@/assets/avatar.webp';
import { Heart } from 'lucide-react';
const Navbar = () => {
    return (
        <nav className="bg-white  mx-auto px-4 sm:px-6 lg:px-8 w-full border-b border-[#DADADA]">
            <div className="flex justify-between items-center h-20">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            className="h-12 w-12 lg:w-20 lg:h-20"
                            src={Logo}
                            alt="Company Logo"
                        />
                    </div>
                    <div className="ml-2 gap-x-1 flex">
                        <span className="tracking-tighter text-lg lg:text-3xl font-black text-[#0E8345]">
                            BOB
                        </span>
                        <span className="tracking-tighter text-lg lg:text-3xl font-black text-[#333333]">
                            farmer inc.
                        </span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="flex  items-center rounded-full bg-[#E8E8E8] px-4 py-2 cursor-pointer">
                        <Heart className="h-4 w-4 text-black font-semibold" fill='#000000' />
                        <span className="ml-2 text-black text-sm font-semibold">My favorites</span>
                    </button>
                    <div className="flex items-center">
                        <img
                            className="h-12 w-12 rounded-full"
                            src={Avatar}
                            alt="User avatar"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;