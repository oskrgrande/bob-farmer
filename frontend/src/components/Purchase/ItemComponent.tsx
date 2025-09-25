import React from 'react';
import PurchaseComponent from './PurchaseComponent';
import { Heart, Star, ShoppingCart, Truck } from 'lucide-react';
interface ItemProps {
    title: string;
    price: number;
    subtitle: string;
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

const orderSummary = {
    shipping: 'Free',
    tax: 0.00,
    items: [
        {
            name: 'Salvadorian Corn',
            quantity: 1,
            price: 1.00,
            image: '/corn.webp'
        }
    ]
};

const ItemComponent: React.FC<ItemProps> = ({
    title,
    price,
    subtitle,
    description,
    reviews,
    rating,
    image,
    specifications,
}) => {
    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 divide-y-1 divide-gray-200 flex flex-col ">
            <div className="flex flex-col-reverse md:flex-row gap-8 pb-8">
                <div className="w-full md:w-1/2">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h1>

                    <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <span
                                    key={index + 1}
                                    className={` ${index < rating ? 'text-[#FF9B48]' : 'text-gray-200'
                                        }`}
                                >
                                    <Star className="h-5 w-5" fill={index < rating ? '#FF9B48' : 'none'} />
                                </span>
                            ))}
                        </div>
                        <span className="text-[#464646] text-sm sm:text-base">
                            {reviews} reviews
                        </span>
                    </div>

                    <div className="text-2xl sm:text-3xl font-bold mb-3">
                        ${price.toFixed(2)}
                    </div>

                    <p className="text-[#464646] mb-5 text-sm sm:text-base">
                        {subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#464646] mb-5">
                        You can only purchase one ear of corn per purchase.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-5">
                        <button className="flex-1 flex-row flex items-center justify-center cursor-pointer sm:flex-none bg-[#06C167] text-black px-6 py-2 rounded-lg ">
                            <ShoppingCart className='h-5 w-5 mr-2' />
                            Buy now
                        </button>
                        <button className="flex-1 sm:flex-none px-3 cursor-pointer py-2 rounded-lg bg-[#E8E8E8]">
                            <Heart className='h-4 w-4' />
                        </button>
                    </div>

                    <div className="flex items-center flex-row gap-2 text-[#464646] mb-6 text-xs sm:text-sm">
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
            <div className="flex flex-col-reverse md:flex-row gap-12 py-8">
                <div className='w-full md:w-1/2'>
                    <h2 className="text-lg sm:text-xl font-bold mb-4">
                        Description
                    </h2>
                    <div className="text-sm sm:text-base">
                        <p className="text-[#464646]">{description}</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <h2 className="text-lg sm:text-xl font-bold mb-4">
                        Specifications
                    </h2>
                    <div className="grid grid-cols-1 divide-y-1 divide-gray-200 text-[#464646] text-sm sm:text-base">
                        <div className='py-3 px-4 flex flex-row justify-between'>
                            <span >Variety</span>
                            <span >{specifications.variety}</span>
                        </div>
                        <div className='py-3 px-4 bg-[#F5F5F5] flex flex-row justify-between'>
                            <span >Origin</span>
                            <span >{specifications.origin}</span>
                        </div>
                        <div className='py-3 px-4 flex flex-row justify-between'>
                            <span >Presentation</span>
                            <span >{specifications.presentation}</span>
                        </div>
                        <div className='py-3 px-4 flex bg-[#F5F5F5] flex-row justify-between'>
                            <span >Average size</span>
                            <span >{specifications.averageSize}</span>
                        </div>
                        <div className='py-3 px-4 flex flex-row justify-between'>
                            <span >Approximate weight</span>
                            <span >{specifications.approximateWeight}</span>
                        </div>
                    </div>
                </div>
            </div>
            <PurchaseComponent subtotal={orderSummary.items[0].price * orderSummary.items[0].quantity} shipping={orderSummary.shipping} tax={orderSummary.tax}  items={orderSummary.items} />
        </div>
    );
};

export default ItemComponent;
