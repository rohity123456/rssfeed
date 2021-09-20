import React, { useState } from 'react'
import Modal from '../Modal'
import './index.css'

const Accordion = ({feed={}}) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [readMore, setReadMore] = useState(false);

    return (
        <div className = "accordion">
            
            <div className={isExpanded ? "header expanded" : "header"}>
            {feed?.title}
            <span onClick = {() => setIsExpanded(!isExpanded)}> <i className="fas fa-chevron-down"></i> </span>
            
            </div>
            {isExpanded ?<div className = "item">
                     {feed["content:encodedSnippet"]} 
                     <br /> 
                     <button onClick={()=>setReadMore(true)} >Read More </button>
            </div>
            : null}

                <Modal title={feed?.title} open={readMore} onClose={()=>setReadMore(false)}  >
                    <div className="modal_children" 
                    dangerouslySetInnerHTML={{__html:feed?.["content:encoded"] || feed?.content }}/>
                </Modal>
        </div>
    )
}

export default Accordion
