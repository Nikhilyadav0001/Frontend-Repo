import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
        <div className='card'>
            <img src="https://www.shutterstock.com/image-photo/traveler-woman-arms-raised-triumph-260nw-2457990309.jpg" alt="Profile" />
            <h1>{props.user},{props.age}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Follow</button>
        </div>
    )
}

export default Card