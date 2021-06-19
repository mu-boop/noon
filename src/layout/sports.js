import SmallCard from '../components/smallcard';
import {useState} from 'react';

function Sports(){
    const [cardData , setCardData] = useState([
        {
            imgsrc : 'https://k.nooncdn.com/cms/pages/20210614/81bab5b4b03e42d6f95d7727379adbec/en_mb-mw-01.png',
        },
        {
            imgsrc : 'https://k.nooncdn.com/cms/pages/20210614/81bab5b4b03e42d6f95d7727379adbec/en_mb-mw-02.png',
        },
        {
            imgsrc : 'https://k.nooncdn.com/cms/pages/20210614/81bab5b4b03e42d6f95d7727379adbec/en_mb-mw-03.png',
        },
        {
            imgsrc : 'https://k.nooncdn.com/cms/pages/20210614/81bab5b4b03e42d6f95d7727379adbec/en_mb-mw-04.png',
        },
        {
            imgsrc : 'https://k.nooncdn.com/cms/pages/20210614/81bab5b4b03e42d6f95d7727379adbec/en_mb-mw-05.png',
        },
        {
            imgsrc : 'https://k.nooncdn.com/cms/pages/20210614/81bab5b4b03e42d6f95d7727379adbec/en_mb-mw-06.png',
        },
    ])
    return(
        <div className='bg-light my-4'>

         <h4 className='ml-5'>Sports</h4>
        <div className='bg-light d-flex justify-content-lg-around'>
            <div className='row w-100 '>
            {cardData.map((v,i)=>{
                return(
                    <div key={i} className='col-md-2 p-1 py-3 text-center'>
                    <SmallCard
                     imgsrc={v.imgsrc}
                      />
                    </div>  
                    )
                })}
            </div>
                </div>
        </div>
    )
}
export default Sports;