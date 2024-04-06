
import React from 'react'
import useProduct from './useProduct'


function ProductCard() {
    const [product] = useProduct()
    return (
        <></>
        // {
        //     product.map(user = (
        //         <div key={id}>
        //             <li>{user.city}</li>
        //         </div>
        //     ))
        // }
    )

}

export default ProductCard