function Card(props){
    return( 
            <div className='p-2 shadow ' >
            <img className='w-100' src={props.imgsrc}/>
                <h5 className='py-1'>{props.name}</h5>
                <h5>{props.description}</h5>
                <h5>{props.price}</h5>
                <button className='btn btn-warning w-100'>Add to Cart</button>
            </div>
    )
}
export default Card;