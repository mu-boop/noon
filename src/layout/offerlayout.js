import {useState} from 'react';
import Offercard from '../components/offercard';
function Offerlayout(){
    const [offerData,setOfferData] = useState([
        {
           
            imgSrc:'https://k.nooncdn.com/cms/pages/20210522/f99e22b603ec3e0cbf9fc924d5c54f89/en_mega-02.png'
        },
        {
           
            imgSrc:'https://k.nooncdn.com/mon/1624046671005-ckq2rgfbx0llzrhr0pmadl3is.png'
        },
    ])
    return(
        <div>
            <div className='d-flex my-3'> 
                {offerData.map((v,i)=>{
                    return(
                        <div className='col-md-6 bg-light shadow '>
                            <Offercard 
                            imgSrc={v.imgSrc} />
                        </div>
                    )
                })}
                  
                
            </div>
        </div>
    )
}

export default Offerlayout;