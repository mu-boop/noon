import Card from '../components/card';
import {useState} from 'react';

function Laptop(){
    const [cardData , setCardData] = useState([
        {
            imgsrc : 'https://z.nooncdn.com/products/tr:n-t_240/v1605900910/N36061300A_1.jpg',
            name : 'HP laptop core i5',
            description : '8Gb RAM 256Gb Hard Disk',
            price : 'AED 2000' 
        },
        {
            imgsrc : 'https://z.nooncdn.com/products/tr:n-t_240/v1605900915/N13977376A_1.jpg',
            name : 'Dell laptop core i7',
            description : '4Gb RAM 500Gb Hard Disk',
            price : 'AED 2500' 
        },
        {
            imgsrc : 'https://z.nooncdn.com/products/tr:n-t_240/v1612944610/N44278658A_1.jpg',
            name : 'HP laptop core i3',
            description : '6Gb RAM 256Gb Hard Disk',
            price : 'AED 1800' 
        },
        {
            imgsrc : 'https://z.nooncdn.com/products/tr:n-t_240/v1605171462/N41910685A_1.jpg',
            name : 'Dell laptop core i9',
            description : '12Gb RAM 256Gb Hard Disk',
            price : 'AED 3000' 
        },
    ])
    return(
        <div className='my-5'>
         <h4 className='ml-5'>Top picks in laptops</h4>
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
export default Laptop;