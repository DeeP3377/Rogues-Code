import React , {useState,useEffect} from 'react';
import axios from 'axios';
import "./Todo.css";
const Home=()=>{

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setData(response.data))
            .catch(err => console.log(err));
    
    }, []);
    return(
        <>

            <div className='today-deals-div'>
                {data.map((user) => (
                        
                    <div className='col-xs-6 col-lg-3 col-md-3 col-sm-6' style={{marginTop: '100px'}}>
                        <div className='card'>
                            <img className='card-image' src={user.image} alt=""></img>
                            <h4 className='card-title'>{user.title}</h4>
                            <h4 className='card-price'>Price : {user.price}</h4>
                            <h4>Rating : {user.rating.rate}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Home;