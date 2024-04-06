import React from 'react';
import useProduct from './useProduct';

function ProductCard() {
    const [users] = useProduct(); 
    return (
        <>
       { users.map(users => (
            <div key={users.id}> 
                <li> name -:{users.username}</li>
                <li> mail -:{users.email}</li>
            </div>
        ))}
        </>
    );
}

export default ProductCard;
