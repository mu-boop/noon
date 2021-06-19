import Card from '../components/card';
import {useState} from 'react';

function CardLayout(){
    const [cardData , setCardData] = useState([
        {
            imgsrc : 'https://z.nooncdn.com/products/tr:n-t_240/v1610784898/N43748990A_1.jpg',
            name : 'Bubble',
            description : 'For yous little child',
            price : 'AED 8.00' 
        },
        {
            imgsrc : 'https://z.nooncdn.com/products/tr:n-t_240/v1605814220/N41044065A_1.jpg',
            name : 'iPhone',
            description : '256gb',
            price : 'AED 80.00' 
        },
        {
            imgsrc : 'https://z.nooncdn.com/products/tr:n-t_240/v1610036835/N40633047A_1.jpg',
            name : 'Blender',
            description : 'For yous home',
            price : 'AED 8.00' 
        },
        {
            imgsrc : 'https://z.nooncdn.com/products/tr:n-t_240/v1606407160/N39843845A_1.jpg',
            name : 'Watch',
            description : 'For yous little child',
            price : 'AED 8.00' 
        },
    ])
    return(
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
    )
}
export default CardLayout;