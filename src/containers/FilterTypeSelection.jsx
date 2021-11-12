import React, {useEffect} from 'react'
import M from "materialize-css"


export default function FilterTypeSelection() {

    useEffect(() => {
        let elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
    }, [M])

    return (
        <div>
            <div className="eq-input-field col s12">
                <select>
                <option value="" disabled selected>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                </select>
                <label>Filter Type</label>
            </div>
        </div>
    )
}
