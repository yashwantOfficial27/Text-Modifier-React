import React, {useState} from 'react';

export default function Textform(props) {

    const handleChange = (event)=>{
        setText(event.target.value)
        
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case Successfully!!", "success");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case Successfully!!", "success");
    }

    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleTrim = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("To remove extra spaces!!", "success");
    }

    const handleClear = ()=>{
        setText("");
        props.showAlert("Text is cleared!!", "success");
    }

    const [text, setText] = useState("Text is this");
  return (
    <div className="container mb-3" style={{color : props.mode === "light" ? "black" : "white"}}>
        <h1>Enter Text To Analyze</h1>
        <textarea className="form-control" id="myBox" onChange = {handleChange} rows="8" value = {text} placeholder='Enter Text Here!!' style={{color: props.mode === 'light'?'black' : 'white', backgroundColor : props.mode === "light" ? "white":"grey"}}></textarea>
        <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>CONVERT TO UPPERCSE</button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>convert to lowercase</button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy to Clipboard</button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleTrim}>Remove extra Spaces</button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-2 my-2' onClick={handleClear}>Clear Clipboard</button>

        <div>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element) =>{ return element.length !== 0}).length} words and {text.length} characters</p>
            <p>It takes {(text.split(/\s+/).filter((element) =>{ return element.length !== 0}).length) * 0.008} minutes to read!!</p>

            <h2>Preview</h2>
            <p>{text.length > 0 ?text : "Nothing to Preview!"}</p>
        </div>
    </div>
  );
}
