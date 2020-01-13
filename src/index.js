import React from 'react'
import {render} from 'react-dom'

const App = () => {
    return(
        <div>
            <p>This is the main app page</p>
        </div>
    )
}

render(<App />, document.getElementById('root'))