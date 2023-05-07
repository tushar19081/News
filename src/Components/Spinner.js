import React from 'react'
import loading from './loading.gif'

function Spinner() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
            }}>
            <img src={loading} alt="" width = "40px" height= "40px"/>
        </div>
    )
}

export default Spinner
