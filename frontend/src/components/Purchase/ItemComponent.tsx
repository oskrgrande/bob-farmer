import React from 'react';
import { Heart, Star, ShoppingCart, Truck } from 'lucide-react';
interface ItemProps {
    title: string;
    price: number;
    description: string;
    reviews: number;
    rating: number;
    image: string;
    specifications: {
        variety: string;
        origin: string;
        presentation: string;
        averageSize: string;
        approximateWeight: string;
    };
}

const ItemComponent: React.FC<ItemProps> = ({
    title,
    price,
    description,
    reviews,
    rating,
    image,
    specifications,
}) => {
    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
            <div className="flex flex-col-reverse md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-3">{title}</h1>

                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <span
                                    key={index + 1}
                                    className={` ${index < rating ? 'text-[#FF9B48]' : 'text-gray-200'
                                        }`}
                                >
                                    <Star  className="h-5 w-5" fill={index < rating ? '#FF9B48' : 'none'} />
                                </span>
                            ))}
                        </div>
                        <span className="text-[#464646] text-sm sm:text-base">
                            {reviews} reviews
                        </span>
                    </div>

                    <div className="text-2xl sm:text-3xl font-bold mb-4">
                        ${price.toFixed(2)}
                    </div>

                    <p className="text-[#464646] mb-6 text-sm sm:text-base">
                        {description}
                    </p>

                    <p className="text-xs sm:text-sm text-[#464646] mb-6">
                        You can only purchase one ear of corn per purchase.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6">
                        <button className="flex-1 flex-row flex items-center justify-center cursor-pointer sm:flex-none bg-[#06C167] text-black px-6 py-2 rounded-lg ">
                           <ShoppingCart className='h-5 w-5 mr-2' />
                           Buy now
                        </button>
                        <button className="flex-1 sm:flex-none px-3 cursor-pointer py-2 rounded-lg bg-[#E8E8E8]">
                            <Heart className='h-4 w-4'  />
                        </button>
                    </div>

                    <div className="flex items-center flex-row gap-2 text-[#464646] mb-8 ttext-xs sm:text-sm">
                       <Truck className='h-5 w-5' />
                       <span> Free shipping</span>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="aspect-[4/3] w-full">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full rounded-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemComponent;
