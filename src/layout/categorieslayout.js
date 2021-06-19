import Categories from "../components/categoriesCard";
import {useState} from "react"
function Categorieslayout(){
    const [categoriesData , setCategoriesData] = useState([
        {
            src:'https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/en_cat-module-appliances.jpg',
        },
        {
            src:'https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/en_cat-module-home_kitchen.jpg',
        },
        {
            src:'https://k.nooncdn.com/cms/pages/20210213/3bc0a54552185869817ba573d97bba97/en_cat-module-largeappliances.jpg',
        },
        {
            src:'https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/en_cat-kitchen_dining.jpg',
            name:'Kitchen And Dining'
        },
        {
            src:'https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/en_cat-homeappliances.jpg',
        },
        {
            src:'https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/en_cat-kitchenapp.jpg',
        },
        {
            src:'https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/en_cat-homedecor.jpg',
        },
        {
            src:'https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/en_cat-bedding.jpg',
        },
        {
            src:'https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/en_cat-bath.jpg',
        },
        {
            src:'https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/en_cat-tools_home.jpg',
        },
        {
            src:'https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/en_cat-storage.jpg',
        },
        {
            src:'https://k.nooncdn.com/cms/pages/20210120/800542152b0966457fa0968e13024ce3/en_cat-furniture.jpg',
        },
    ])
    return(
        <div className='my-3 bg-light d-flex flex-wrap'>
            {categoriesData.map((v,i)=>{
                return(
                    <div className='col-md-4 my-2' key={i}>
                        <Categories
                        src={v.src}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Categorieslayout;