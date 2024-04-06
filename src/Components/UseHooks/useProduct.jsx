import axios from "axios"
import { useEffect, useState } from "react"

function useProduct() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = async () => {
        const response = await axios.get('https://fakestoreapi.com/users')
        const data = (response.data)
        setUsers(data)

    }
    return[ users];

}

export default useProduct