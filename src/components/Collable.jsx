import React, { useState } from 'react'
import CollableItem from './CollableItem'

const Collable = () => {
    const [state, setState] = useState([{
        title: 'Hats',
        open: false,
        items: [
            {
                title: 'All Hats',
                link: "/"
            }
            ,
            {
                title: "Packable Hats",
                link: "/"
            },
            {
                title: "Bucket Hats",
                link: "/"
            },
            {
                title: "Straw Hats",
                link: "/"
            },
            {
                title: "Wool Hats",
                link: "/"
            },
            {
                title: "Ballcaps",
                link: "/"
            }
        ]
    },
    {
        title: 'Bags',
        open: true,
        items: [
            {
                title: 'All Bags',
                link: "/"
            },
            {
                title: "Leather Bags",
                link: "/"
            },
            {
                title: "Straw Bags",
                link: "/"
            }
            ,
        ]
    },
    ])
    const changeOpen = (val) => {
        const data = [...state]
        setState(data.map(obj => obj.title === val ? { ...obj, open: true } : { ...obj, open: false }))
    }
    return (
        <div className='collable'>
            {state.map((item) => <CollableItem key={item.title} changeOpen={changeOpen} data={
                item
            } />)}
        </div>
    )
}

export default Collable