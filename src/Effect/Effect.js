
import react, { useEffect, useState } from 'react'
import './effect.css'
const Effect = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => setData(result))
    }, [])

    return (
        <>
            <h1>useEffect Hooks</h1>
            <div>
                <ol>
                    {
                        data.map((item) => {
                            return <h5> Id:{item.id}<br />  Name : {item.name}<br />City :  {item.address.city} </h5>
                        })
                    }
                </ol>
            </div>
        </>
    )
}
export default Effect