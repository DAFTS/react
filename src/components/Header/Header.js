import React from 'react'
import './style.scss'

const header = (props)=>{
    let {left , leftAction , right , rightAction , title} = props;
    return (
        <div className="header">
            {left && 
            <div className="header-left">
                <img src={left} alt="" onClick={leftAction}/>
            </div>}
            <h2 className="header-title">{title}</h2>
            {right && 
            <div className="header-right" onClick={rightAction}>
                <img src={right} alt=""/>
            </div>}
        </div>
    )
}

export default header;