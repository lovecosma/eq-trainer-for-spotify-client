import React, {useEffect} from 'react'
import "../stylesheets/EQUI.css"
import BandwithContainer from './BandwithContainer'

export default function EQUI() {
    return (
        <div id="equi-container">
            <div className="eq-child-1" >
                <BandwithContainer/>
                <BandwithContainer/>
                <BandwithContainer/>
                <BandwithContainer/>
            </div>
            <div className="eq-child-2">
                <BandwithContainer/>
                <BandwithContainer/>
                <BandwithContainer/>
            </div>
        </div>
    )
}
