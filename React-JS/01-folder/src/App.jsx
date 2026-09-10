import React from 'react'

const App = () => {
    return (
        // these empty tags are fragements 
        // otherwise we have to return a single parent tag
        <>
            <div id='NK'>
                <h1>hello from NK </h1>
            </div>

            <div id='Kunal'>
                <h1>hello form Kunal </h1>
            </div>
        </>
    )
}

export default App