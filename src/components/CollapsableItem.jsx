import React from 'react'
import { useActions, useVariables } from "@tapcart/webbridge-react";


const CollapsableItem = ({ data, changeOpen }) => {
    const { openCollection, openScreen } = useActions();

    const openCollectionLink = (id) => {
        openCollection({ collectionId: `${id}` });
    };
    return (
        <div className='collapsable-item'>
            <h3 onClick={() => changeOpen(data.title)}>{data.title}</h3>
            <ul className={data.open && 'active'}>
                {
                    data.items.map((item, index) => (
                        <li key={index} onClick={() => { openCollectionLink(item.link) }}>

                            {item.title}

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default CollapsableItem