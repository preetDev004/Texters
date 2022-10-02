import React from 'react'

export default function Footer(props) {
    return (
        <div>
            <footer className={`text-center text-lg-start bg-${props.mode === 'success' ? 'success' : 'light'} text-${props.mode === 'success' ? 'light' : 'muted'}`} >  
                <div className="text-center p-4 ">
                    © 2022 Copyright :
                    <a className="text-reset fw-bold" href="/">Texters.com</a>
                </div>
            </footer>
        </div>
    )
}
