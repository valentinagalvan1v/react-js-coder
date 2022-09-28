import React from 'react'

export default function ItemListContainer(props) {
  return (
    <div className='ItemListContainer'>
        <h2>
            {props.greeting && props.greeting}
        </h2>
    </div>
  )
}


