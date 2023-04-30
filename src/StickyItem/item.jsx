import React from 'react'
import Title from './Title'
import Content from './content'
export default function Item(){
    return (
        <li>
        <a href="#" contenteditable>
            <Title/>
    <Content/>
        </a>
      </li>
    )
}