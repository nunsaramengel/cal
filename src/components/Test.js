import React from 'react'

const Test = ({...props}) => {
    return (
        <div style={{padding:"80px 190px"}}>
            <h1 style={{color:props.titleColor, fontSize: "2rem"}}>{props.title}</h1>
            <p style={{color:props.textColor}}>{props.text}</p>
        </div>
    )
}

export default Test
