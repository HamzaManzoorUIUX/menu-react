import React from 'react'
import SliderItem from './SliderItem'

const Slider = () => {
    return (
        <div className='slider-container'>
            <h3 className="title">
                Spring Summer 2024
            </h3>
            <div className="slider-container-wrapper">
                <SliderItem />
                <SliderItem />
                <SliderItem />
                <SliderItem />
            </div>
        </div>
    )
}

export default Slider