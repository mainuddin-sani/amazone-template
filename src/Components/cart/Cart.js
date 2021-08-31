import React from 'react';

const Cart = (props) => {
    console.log(props);
    const cartNumber = props.cart;
    console.log(cartNumber);
    console.log(cartNumber.price);
    
    let total = 0;
    for (let i = 0; i < cartNumber.length; i++) {
        const element = cartNumber[i];
        total = total + element.price;
        console.log(element.price);
    }

    let shipping = 0;
    if (total  > 35) {
        shipping = 0;
    }else if(total > 15){
        shipping = 4.90;
    }else if(total > 0){
        shipping = 12.5;
    }
    
    
    let tax = (total / 10);

    let grandTotal = (total + shipping + tax);

    const formatNumber = (num) => {
        const precision = parseFloat(num);
        return Number(precision).toFixed(2);
    }

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Orderd {cartNumber.length}</p>
            <p>Tax+ VAT : {formatNumber(tax)}</p>
            <p>Shipping : {shipping}</p>
            <p>Total Price : {formatNumber(grandTotal)} </p>
            
            
        </div>
    );
};

export default Cart;