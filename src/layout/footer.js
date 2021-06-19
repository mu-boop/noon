import Footertable from "../components/footertable"
import Fb from '../images/facebook.png'
import Insta from '../images/instagram.png'
import Twitter from '../images/twitter.png'
import Youtube from '../images/youtube.png'
function Footer(){
    return(
        <div>
            <div className='w-100 d-flex bg-light border-bottom border-top'>
                <div className='col-md-6 py-4 '>
                <h2>We're Always Here To Help</h2>
                <p>Reach out to us through any of these support channels</p>
                </div>
                <div className='col-md-6 py-4 '>
                <h4 className='ml-5'>Email</h4>
                <h4 className='ml-5'>care@noon.com</h4>
                </div>
            </div>
            <div className='d-flex py-5'>
            <div className='col-md-2'>
            <Footertable 
            head='Electronics'
            first = 'Mobiles'
            second = 'Tablets'
            third='Laptops'
            forth='Home Appliances'
            five='camera'
            six='Televisions'
            seven='Headphones'
            eight='Video Games'
            />
            </div>
            <div className='col-md-2'>
            <Footertable 
            head='Fashion'
            first = 'Mens'
            second = 'Womens'
            third='Girls'
            forth='Boys'
            five='Watches'
            six='Jewllery'
            seven='HandBags'
            eight='Mens Eyewear'
            />
            </div>
            <div className='col-md-2'>
            <Footertable 
            head='Beauty'
            first = 'Fragrance'
            second = 'Make-up'
            third='Haircare'
            forth='Skincare'
            five='Personal Care'
            six='Accessorries'
            seven='Grooming'
            eight='Health care'
            />
            </div>
            <div className='col-md-2'>
            <Footertable 
            head='Baby'
            first = 'Strollers & Prams'
            second = 'Car Seats'
            third='Feeding'
            forth='Bathing Skincare'
            five='Diapering'
            six='Baby Cloth'
            seven='Baby toddler'
            eight='Baby Foods'
            />
            </div>
            <div className='col-md-2'>
            <Footertable 
            head='Groceries'
            first = 'Mobiles'
            second = 'Tablets'
            third='Laptops'
            forth='Home Appliances'
            five='camera'
            six='Televisions'
            seven='Headphones'
            eight='Video Games'
            />
            </div>
            <div className='col-md-2'>
            <Footertable 
            head='Top Brands'
            first = 'Mobiles'
            second = 'Tablets'
            third='Laptops'
            forth='Home Appliances'
            five='camera'
            six='Televisions'
            seven='Headphones'
            eight='Video Games'
            />
            </div>
        </div>
            <div className='w-100 bg-light height-class'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-md-4 my-5'>
                    <img src='https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg' />
                    <img src='https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg' />
                    </div>  
                    <div className='col-md-4 d-flex justify-content-center align-items-center my-5'>
                    <div className='rounded-circle bg-primary d-flex align-items-center justify-content-center mx-2 icon'><img className='w-50' src={Fb} /></div>
                    <div className='rounded-circle bg-warning d-flex align-items-center justify-content-center mx-2 icon'><img className='w-50' src={Insta} /></div>
                    <div className='rounded-circle bg-success d-flex align-items-center justify-content-center mx-2 icon'><img className='w-50' src={Youtube} /></div>
                    <div className='rounded-circle bg-dark d-flex align-items-center justify-content-center mx-2 icon'><img className='w-50' src={Twitter} /></div>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Footer;