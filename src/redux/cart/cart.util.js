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

export const removeItemFromCart =(cartItems,cartItemToRemove)=>{
    const existingCartItem = cartItems.find(
        item=>cartItemToRemove.id == item.id
    )

    if(existingCartItem.quantity==1){
        return cartItems.filter(
            cartItem=> cartItem.id != cartItemToRemove.id
        )
    }

    return cartItems.map(
        cartItem=> 
            cartItem.id==cartItemToRemove.id ? 
                {...cartItem, quantity: cartItem.quantity - 1}: cartItem
    )
}