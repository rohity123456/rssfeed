import React, { useState } from 'react'
import './index.css'

const Accordion = ({header = "Header", children}) => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className = "accordion">
            
            <div className={isExpanded ? "header expanded" : "header"}>
            {header}
            <span onClick = {() => setIsExpanded(!isExpanded)}> <i className="fas fa-chevron-down"></i> </span>
            
            </div>
            <div className = "item">
                {
                    isExpanded ? children : null
                }
            </div>
        </div>
    )
}

export default Accordion
