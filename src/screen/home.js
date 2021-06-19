import Navbar from "../components/navbar"
import Slideshow from "../layout/slider";
import CardLayout from "../layout/cardlayout";
import Offerlayout from "../layout/offerlayout";
import Trending from "../layout/trendinglayout";
import SecondSlide from "../layout/secondslider";
import Exclusivedeals from "../layout/exclusivedeals";
import Laptop from "../layout/laptop";
import Deals from "../layout/deals";
import Categorieslayout from "../layout/categorieslayout";
import Sports from "../layout/sports";
import Footer from "../layout/footer";
function Home(){
    return(
        <div>
            <Navbar />
            <Slideshow />
            <CardLayout />
            <Offerlayout />
            <Trending />
            <SecondSlide />
            <Exclusivedeals />
            <Laptop />
            <Deals 
            src='https://k.nooncdn.com/cms/pages/20210429/a2a77ea3701f22c03f99d7d76cec59f8/en_nonvip-03.gif'/>
            <Categorieslayout />
            <Deals
            src='https://k.nooncdn.com/cms/pages/20201020/79a2e38e27583a1a5db92d21097f3b8e/en_beautyboutique-01.png' />
            <Sports />
            <Footer />
        </div>
    )
}

export default Home;