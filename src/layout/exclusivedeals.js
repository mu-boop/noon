import {useState} from 'react';
import Offercard from '../components/offercard';
function Exclusivedeals(){
    const [offerData,setOfferData] = useState([
        {
           
            imgSrc:'https://k.nooncdn.com/cms/pages/20210616/2c472a095ac6fb20be26e39466b07038/en_cat-01.png'
        },
        {
           
            imgSrc:'https://k.nooncdn.com/cms/pages/20210616/2c472a095ac6fb20be26e39466b07038/en_cat-02.png'
        },
    ])
    return(
        <div>
            <div className='d-flex my-3'> 
                {offerData.map((v,i)=>{
                    return(
                        <div className='col-md-6 bg-light shadow p-1'>
                            <Offercard 
                            imgSrc={v.imgSrc} />
                        </div>
                    )
                })}
                  
                
            </div>
        </div>
    )
}

export default Exclusivedeals;