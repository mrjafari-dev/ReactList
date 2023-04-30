import React from 'react'
import Item from './item'
export default function Sticky(){

    var myNote=[
        {title:'note 1',content:'note1'},
        {title:'note 2',content:'note1'},
        {title:'note 3',content:'note1'},
        {title:'note 4',content:'note1'},
        {title:'note 5',content:'note1'},
        {title:'note 6',content:'note1'},

    ]

    var items = myNote.map(value=> <Item title ={value.title} content={value.content}/>
    )
    

 
    return (
        <ul>
       {
        items
       }
          </ul>
    )
}