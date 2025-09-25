import React from 'react';

interface PurchaseProps {
    subtotal: number,
    shipping: string,
    tax: number,
    items: OrderItem[]
}

interface OrderItem {
    name: string;
    quantity: number;
    price: number;
    image: string;
}

const PurchaseComponent: React.FC<PurchaseProps> = ({ subtotal, shipping, tax, items }) => {


    return (
        <div className="w-full p-4 pt-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
                <div className="lg:w-7/12 bg-white text-[#464646]">
                    <h1 className="text-2xl font-bold mb-4">Payment</h1>
                    <p className=" mb-6">All transactions are secure and encrypted.</p>
                    <form className="space-y-6">
                        <div className="space-y-4">
                            <label className="block">
                                <span className="">Card number</span>
                                <input
                                    type="text"
                                    className="mt-1 block w-full rounded-md focus:outline-none  "
                                    placeholder="1234 1234 1234 1234"
                                />
                            </label>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <label className="block col-span-1">
                                    <span className="">Name on card</span>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md ring-0 focus:outline-none  "
                                        placeholder="Card name"
                                    />
                                </label>
                                <label className="block">
                                    <span className="">Expire date</span>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md ring-0 focus:outline-none  "
                                        placeholder="MM/YY"
                                    />
                                </label>
                                <label className="block">
                                    <span className="">Security code</span>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md ring-0 focus:outline-none  "
                                        placeholder="CVV"
                                    />
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full text-sm  py-3 px-4 rounded-xl cursor-pointer bg-[#06C167] text-black "
                        >
                            Confirm purchase
                        </button>
                    </form>
                </div>

                <div className="lg:w-5/12 bg-white text-[#464646]  h-fit">
                    <h2 className="text-xl font-bold mb-4">Order summary</h2>
                    {items.map((item, index) => (
                        <div key={index + 1} className="flex items-center gap-4 mb-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                            <div className="flex-1">
                                <h3 className="font-medium">{item.name}</h3>
                                <p>Qty. {item.quantity}</p>
                            </div>
                            <p className="font-medium">${item.price.toFixed(2)}</p>
                        </div>
                    ))}

                    <div className=" pt-4 space-y-3">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span className='text-black font-semibold'>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span className='text-black font-semibold'>{shipping}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax</span>
                            <span className='text-black font-semibold'>${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between border-t pt-1 border-gray-200">
                            <span>Total</span>
                            <span className='text-black font-semibold'>${(Number(subtotal.toFixed(2)) + Number(tax.toFixed(2))).toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseComponent;