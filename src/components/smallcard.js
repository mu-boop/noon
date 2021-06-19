function SmallCard(props){
    return( 
            <div className='p-2 shadow ' >
            <img className='w-100' src={props.imgsrc}/>
                <p className='py-1'>{props.name}</p>
            </div>
    )
}
export default SmallCard;