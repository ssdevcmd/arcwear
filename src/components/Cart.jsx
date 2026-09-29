import { Minus, Plus, Trash2 } from 'lucide-react';
import React from 'react';

const Cart = ({  cart, increase, decrease, remove, subtotal}) => {
    return (
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mt-16">

            <h2 className="text-2xl font-bold mb-6">
                Your Cart
            </h2>

            {cart.length === 0 ? (
                <p className="text-slate-400">Your cart is empty.</p>
            ) : (
                <div className="space-y-5">

                    {cart.map(item => (
                        <div
                            key={`${item.id}-${item.size}`}
                            className="flex justify-between items-center border-b border-slate-800 pb-4"
                        >

                            <div>

                                <h3 className="font-semibold">{item.name}</h3>

                                <p className="text-sm text-slate-400">
                                    Size {item.size}
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <button onClick={() => decrease(item.id, item.size)}>
                                    <Minus size={18} />
                                </button>

                                <span>{item.quantity}</span>

                                <button onClick={() => increase(item.id, item.size)}>
                                    <Plus size={18} />
                                </button>

                                <button
                                    onClick={() => remove(item.id, item.size)}
                                    className="text-red-400"
                                >
                                    <Trash2 size={18} />
                                </button>

                            </div>

                        </div>
                    ))}

                    <div className="flex justify-between text-xl font-bold pt-4">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>

                </div>
            )}

        </section>
    );
};

export default Cart;