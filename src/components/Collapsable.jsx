import React, { useState } from 'react'
import CollapsableItem from './CollapsableItem'

const Collapsable = () => {
    const [state, setState] = useState([{
        title: 'Hats',
        open: true,
        items: [
            {
                title: 'All Hats',
                link: "262990331966"
            }
            ,
            {
                title: "Packable Hats",
                link: "179477053502"
            },
            {
                title: "Bucket Hats",
                link: "261911248958"
            },
            {
                title: "Straw Hats",
                link: "179454246974"
            },
            {
                title: "Wool Hats",
                link: "31001936"
            },
            {
                title: "Ballcaps",
                link: "262762102846"
            }
        ]
    },
    {
        title: 'Bags',
        open: false,
        items: [
            {
                title: 'All Bags',
                link: "261216895038"
            },
            {
                title: "Leather Bags",
                link: "270787149886"
            },
            {
                title: "Straw Bags",
                link: "264569356350"
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
                link: "220127100990"
            },
            {
                title: "Dresses",
                link: "275792756798"
            },
            {
                title: "Sweaters",
                link: "263344029758"
            },
            {
                title: "Beanies + Hoods",
                link: "262991183934"
            },
            {
                title: "Blankets+Scarves",
                link: "262991118398"
            }
        ]
    },
    {
        title: 'Belts',
        open: false,
        items: [
            {
                title: 'All Belts',
                link: "162856796222"
            },
            {
                title: "Classic Belts",
                link: "272376004670"
            },
            {
                title: "Statement Belts",
                link: "272376037438"
            }
        ]
    },
    {
        title: 'Accessories',
        open: false,
        items: [
            {
                title: 'All Accessories',
                link: "126755589"
            },
            {
                title: "Travel",
                link: "263657291838"
            },
            {
                title: "Care",
                link: "261927436350"
            },
            {
                title: "Gifts",
                link: "261621907518"
            }
        ]
    },
    ])
    const changeOpen = (val) => {
        const data = [...state]
        setState(data.map(obj => obj.title === val ? { ...obj, open: true } : { ...obj, open: false }))
    }


    return (
        <div className='collapsable'>
            {state.map((item) => <CollapsableItem key={item.title} changeOpen={changeOpen} data={
                item
            } />)}
        </div>
    )
}

export default Collapsable