import React from 'react'
import Slider from './Slider'
import "../stylesheets/BandwithContainer.css"
import FilterTypeSelection from '../containers/FilterTypeSelection'

export default function BandwithContainer() {
    return (
        <div className="eq-bandwith-container">
            <div className="slider-container">
                <Slider name="freq"/>
                <Slider name="gain"/>
                <Slider name="Q"/>
            </div>
            <div>
                <FilterTypeSelection/>
            </div>
        </div>
    )
}
