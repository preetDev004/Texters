import React from 'react'

export default function About(props) {
    return (
        <>
        <h3 className='mx-3 my-2'>About us</h3>
        <div className='container my-3'>
            <div className="accordion " id="accordionExample">
                <div className={`accordion-item bg-${props.mode==='success'?'dark':'light'} text-${props.mode==='success'?'white':'black'}`}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button bg-${props.mode==='success'?'success':'dark'} text-${props.mode==='success'?'white':'white'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            This is Web-app of Texters....
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <p><strong>A Text-utility from "Texters".</strong> </p><p>&nbsp;&nbsp;&nbsp;&nbsp;This text-utility web-app is made by <strong><code><a href="https://www.instagram.com/_preet_7274/">@_preet_7274</a></code></strong> with the help of JavaScript framework called <strong>ReactJs</strong> single handedly. </p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp; Even you can cntribute in this web-app by just giving your ideas of imrovements or by submiting your own custom Components made in ReactJs on the E-mail : <strong> <code><a href="mailto:preetpatelofficial004@gmail.com">preetpatelofficial004@gmail.com</a></code></strong> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
