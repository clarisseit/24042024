
export function calcTotal (cart) {
    var t = 0;
    cart.forEach(item => {
       t +=  item.price * item.quantity;
    });
    return t;
}


export function itemTotal(price){
    
    price.forEach(item=>{
        var total = item.price * item.quantity
        return total
    })
   
}