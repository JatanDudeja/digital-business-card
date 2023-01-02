import React from 'react'
import ReactDOM from 'react-dom'
import Name from './Name'
import About from './About'
import Interest from "./Interest"
import Icons from './Icons'


function Main(){
    return(
        <div className='main-intro'>
            <Name />
            <div className='main-buttons'>
                <a href='https://www.gmail.com'>
                    <button className='main-email'>
                        <i class="fa-solid email-button fa-envelope"></i>
                        Email
                    </button>
                </a>

                <a href='https://www.linkedin.com/in/jatan-dudeja-99a91b1b6/'>
                    <button className='main-linkedIn'>
                        <i class="fa-brands linkedIn-button fa-linkedin"></i>
                        LinkedIn
                    </button>

                </a>
            </div>
            <About />
            <Interest />
            <Icons />
            
        </div>
    )
}

export default Main