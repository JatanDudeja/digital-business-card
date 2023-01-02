import React from 'react'
import ReactDOM from 'react-dom'
import ImageSection from './components/ImageSection'
import Main from "./components/Main"


function App(){
    return(
        <div className='container'>
            <ImageSection />
            <Main />
        </div>
    )
}

export default App