import Card from '../components/card';
import {useState} from 'react';

function Trending(){
    const [cardData , setCardData] = useState([
        {
            imgsrc : 'https://z.nooncdn.com/products/tr:n-t_240/v1615292698/N42664681A_1.jpg',
            name : 'Amal CAke decoration',
            description : 'For yous little child',
            price : 'AED 8.00' 
        },
        {
            imgsrc : 'https://z.nooncdn.com/products/tr:n-t_240/v1615292705/N42664697A_4.jpg',
            name : 'Amal Cake',
            description : 'For yous little child',
            price : 'AED 8.00' 
        },
        {
            imgsrc : 'https://z.nooncdn.com/products/tr:n-t_240/v1612440228/N22547721A_5.jpg',
            name : 'Foldable Table',
            description : 'For yous little child',
            price : 'AED 8.00' 
        },
        {
            imgsrc : 'https://z.nooncdn.com/products/tr:n-t_240/v1606407153/N16173748A_1.jpg',
            name : 'Boul',
            description : 'For yous little child',
            price : 'AED 8.00' 
        },
    ])
    return(
        <div>

         <h1 className='ml-5'>Trending Deals</h1>
        <div className=' d-flex justify-content-lg-around'>
            <div className='row w-100 '>
            {cardData.map((v,i)=>{
                return(
                    <div key={i} className='col-md-3 p-1 py-3 text-center'>
                    <Card
                     imgsrc={v.imgsrc}
                     name={v.name}
                     description={v.description}
                     price={v.price} />
                    </div>  
                    )
                })}
            </div>
                </div>
        </div>
    )
}
export default Trending;