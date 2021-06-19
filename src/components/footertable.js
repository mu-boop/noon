function Footertable(props){
    return(
        <div className='d-table'>
            <h6>{props.head}</h6>
            <p><a className='text-dark' href='#'>{props.first}</a></p>
            <p><a className='text-dark' href='#'>{props.second}</a></p>
            <p><a className='text-dark' href='#'>{props.third}</a></p>
            <p><a className='text-dark' href='#'>{props.fourth}</a></p>
            <p><a className='text-dark' href='#'>{props.five}</a></p>
            <p><a className='text-dark' href='#'>{props.six}</a></p>
            <p><a className='text-dark' href='#'>{props.seven}</a></p>
            <p><a className='text-dark' href='#'>{props.eight}</a></p>
        </div>
    )
}

export default Footertable;