import React from 'react'
import cl from './DefaultButton.module.css';

export default function DefaultButton(props) {
  return (
   <div style={{textAlign: 'right'}}>
     <button className={cl.button} {...props}>{props.children}</button>
   </div>
  )
}
