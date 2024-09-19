import React, { useState } from 'react'
import CollableItem from './CollableItem'

const Collable = () => {
    const [state, setState] = useState([{
        title: 'Hats',
        open: true,
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
        open: false,
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
    {
        title: 'Knits',
        open: false,
        items: [
            {
                title: 'All Knits',
                link: "/"
            },
            {
                title: "Sweaters",
                link: "/"
            },
            {
                title: "Beanies + Hoods",
                link: "/"
            },
            {
                title: "Blankets+Scarves",
                link: "/"
            }
        ]
    },
    {
        title: 'Belts',
        open: false,
        items: [
            {
                title: 'All Belts',
                link: "/"
            },
            {
                title: "Classic Belts",
                link: "/"
            },
            {
                title: "Statement Belts",
                link: "/"
            }
        ]
    },
    {
        title: 'Accessories',
        open: false,
        items: [
            {
                title: 'All Accessories',
                link: "/"
            },
            {
                title: "Travel",
                link: "/"
            },
            {
                title: "Care",
                link: "/"
            },
            {
                title: "Gifts",
                link: "/"
            }
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