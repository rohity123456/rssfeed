import React from 'react'
import './index.css'


function Category({ category }) {
    const colors = ["#2a8d2f","#452103","#d81e5b","#e07829","#0c72c0"]
    return (
        <div className = {category.selected ? "category selected" : "category"} style = {{ borderColor : colors[Math.floor(Math.random() * 5)]   }}>
            {category.name}
        </div>
    )
}


function Categories({categories = []}) {
    return (
        <div className = "categories">
            {
                categories.map(category => <Category category = {category} key = {category.name} />)
            }
        </div>
    )
}

export default Categories
