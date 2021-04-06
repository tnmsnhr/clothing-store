export const addItemToCart = (cartItems, cartItemToAdd)=>{
    const existing = cartItems.find(
        item=>cartItemToAdd.id == item.id
    )

    if(existing){
        return cartItems.map(cartItem=>
            cartItem.id==cartItemToAdd.id ?
                {...cartItem, quantity:cartItem.quantity+1} : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity:1}]
}