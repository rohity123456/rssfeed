import React from 'react'
import './index.css'


function Category({ category="", onClick=()=>{}, selectedCategories=[] }) {
    const colors = ["#2a8d2f","#452103","#d81e5b","#e07829","#0c72c0"]
    return (
        <div onClick={onClick} className = {selectedCategories.includes(category) ? "category selected" : "category"} style = {{ borderColor : colors[Math.floor(Math.random() * 5)]   }}>
            {category}
        </div>
    )
}


function Categories({categories = [], selectingCategory=()=>{}, selectedCategories=[]}) {
    return (
        <div className = "categories">
            {
                categories.map(category => <Category onClick={()=>selectingCategory(category)} selectedCategories={selectedCategories} category = {category} key = {category} />)
            }
        </div>
    )
}

export default Categories
