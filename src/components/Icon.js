import React from 'react'

export default function Icon({name}){
  switch(name){
    case "forward":
      return (
        <svg className={`icon icon--${name}`} viewBox="0 0 24 24">
          <path d="M12,6.49l-1,1,3.84,3.85H6.49v1.38h8.38L11,16.54l1,1L17.51,12Z"/>
          <path d="M12,24A12,12,0,1,1,24,12,12,12,0,0,1,12,24ZM12,1.41A10.59,10.59,0,1,0,22.59,12,10.6,10.6,0,0,0,12,1.41Z"/>
        </svg>
      )
    case "restart":
      return(
        <svg className={`icon icon--${name}`} viewBox="0 0 24 24" width="24">
          <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
        </svg>
      )
    default:
      return null
  }
}