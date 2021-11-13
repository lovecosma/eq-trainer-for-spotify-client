import React from 'react'

export default function Slider({name}) {
    return (
        <div>
            <form action="#">
                <input type="range" id="test5" min="0" max="100" orient="vertical"/>
                <label>{name}</label>
            </form>
        </div>
    )
}
