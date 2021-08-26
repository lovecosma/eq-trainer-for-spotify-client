import React, { Component } from 'react'
import { Silver } from "react-dial-knob"

export class EQKnob extends Component {

    state={
        name: "",
        value: 0
    }

    static getDerivedStateFromProps = (props, state) => {
        return {
            ...state,
            name: props.name
        }
    }
    handleChange = (e) => {
        this.setState({
            ...this.state,
           value: e
        })
        this.props.handleTurn(this.state);
    }
    
    render() {

        return (
            <div className="block-child">
                <Silver
                        diameter={200}
                        min={0}
                        max={100}
                        step={1}
                        value={this.state.value}
                        onValueChange={this.handleChange}
                        ariaLabelledBy={'my-label'}
                    />
            </div>
        )
    }
}

export default EQKnob
