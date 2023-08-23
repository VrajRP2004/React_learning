import React, {useState} from 'react';


export default function TextForm07(props) {
  const handlUpClick = () =>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Upper Case","success")
  }
  const handleLoClick = () =>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lower Case","success")

  }
  const handleOnChange = (event) =>{
    // console.log("uppercase was onchange");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>   
        <div className="mb-3">
            <div className="container">
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#343a40':'white' ,color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                <button className="btn btn-primary mx-3" onClick={handlUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
    </div>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}


