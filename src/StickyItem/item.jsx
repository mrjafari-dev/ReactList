import React from 'react'
import Title from './Title'
import Content from './content'
export default function Item(value){
    return (
        <li>
        <a href="#" contenteditable>
            <Title title={value.title}/>
         <Content content={value.content}/>
        </a>
      </li>
    )
}