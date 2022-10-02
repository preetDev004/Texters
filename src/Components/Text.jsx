import React, { useState } from 'react'

export default function Text(props) {
    const[text, setText] = useState('')
    const HandleChange = (event)=>{
        setText(event.target.value)
    }
    const upClick =()=>{
        setText(text.toUpperCase())
        props.showAlert("Your text is converted into Uppercase Successfully.","success")
    }
    const lowClick =()=>{
        setText(text.toLowerCase())
        props.showAlert("Your text is converted into Lowercase Successfully.","success")
    }
    const DeleteAll =()=>{
        setText('')
        props.showAlert("Text is Deleted Successfully.","success")
    }
    const RemoveSpaces =()=>{
        let space = text.split(/[ ]+/)
        setText(space.join(" "))
        props.showAlert("Extra spaces have been removed Successfully.","success")
    }
    const WordCount =()=>{
        let arr = text.split(/[ ]+/)
        arr.forEach(element => {
            let index = arr.indexOf(element)
            if (element==='') {
                arr.splice(index ,1)
            }
        });

        return arr.length
    }
    var i = 0
    const FontChanger = ()=>{
        const preEl = document.getElementById('preview')
        const styles = ['Abyssinica SIL','Alkalami','Bebas Neue','Indie Flower','Neucha','Noto Sans Mono','Playball','cursive']
        if (i<8) {
            preEl.style.fontFamily=styles[i]
            i++
        }
        else if (i===8) {
            i=0
            preEl.style.fontFamily=styles[i]
            i++
        }
    }
    return (
        <>
        <div className='container my-3'>
            <h3>{props.headding}</h3>
            <div className="mb-3 my-1">
                <textarea  onChange={HandleChange} value={text} className={`form-control bg-${props.mode==='success'?'dark':'light'} text-${props.mode==='success'?'white':'black'}`} id="exampleFormControlTextarea1" placeholder='Enter here!' rows="8"></textarea>
            </div>
            <div className={`btn btn-${props.mode==='success'?'success':'dark'} mx-1 `} onClick={upClick}>Go Uppercase</div>
            <div className={`btn btn-${props.mode==='success'?'success':'dark'} mx-1 `} onClick={lowClick}>Go Lowercase</div>
            <div className={`btn btn-${props.mode==='success'?'success':'dark'} mx-1 `} onClick={RemoveSpaces} >Remove Extra Spaces</div>
            <div className={`btn btn-${props.mode==='success'?'success':'dark'} mx-1 my-1 `} onClick={DeleteAll}>Delete</div>
        </div>
        <div className='container my-2'>
            <p>--{'>'} <strong>{WordCount()} Words </strong>and<strong> {text.length} characters</strong></p>
            <p>--{'>'} You can read this text in atleast <strong>{(0.009 * WordCount()).toFixed(2)} Minutes</strong></p>
        </div>
        <hr />
        <div className="container my-1">
            <h3>Preview :</h3>
            <p id='preview' style={{fontFamily : {FontChanger}}}>&nbsp;&nbsp;&nbsp;&nbsp; {text}</p>
            <div className={`container btn btn-${props.mode==='success'?'success':'dark'} my-1 `} onClick={FontChanger}>Change Font</div><hr />
        </div>
        </>
    )
}
