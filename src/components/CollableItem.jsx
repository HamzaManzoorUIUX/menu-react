import React from 'react'

const CollableItem = ({ data, changeOpen }) => {
    console.log('data', data);
    return (
        <div className='collable-item'>
            <h3 onClick={() => changeOpen(data.title)}>{data.title}</h3>
            <ul className={data.open && 'active'}>
                {
                    data.items.map((item, index) => (
                        <li key={index}>
                           
                                {item.title}
                      
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CollableItem