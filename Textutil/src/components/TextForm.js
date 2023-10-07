import React ,{useState} from 'react'

export default function TextForm(props) {
    
    const  [text,setText] =useState("");
    const [fWord, findWord] = useState("");
    const [rWord, replaceWord] = useState("");
    
    const handleUpper = () => {
        
        setText(text.toUpperCase());
        props.showAlert(" Converted to UpperCase !!", "success");
        
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleLower = () => {
        setText(text.toLowerCase());
        props.showAlert(" Converted to LowerCase !!", "success");
        
    }
    
    const handleClear = ()=> {
        
        setText("");
        findWord("");
        replaceWord("");
        props.showAlert(" Text Cleared !!", "danger");

    }
    const handleCopy = () => {
        // var t = document.getElementById("TextBox");
        // t.select();
        navigator.clipboard.writeText(text.valueOf());
        props.showAlert(" Text successfully Copied !!", "success");
        

    }
    
    const handleExtraSpace =()=>
    {   
        
        let t= text.split(/[ ]+/);
        setText( t.join(" "));
        props.showAlert(" Extra spaces Removed !!", "success");
        

    }

    const handleFindChange = (event) => {
        findWord(event.target.value);
    }


    const handleReplaceChange = (event) => {
        console.log(replaceWord(event.target.value));
    }

    const handleReplace = () => {
        if (fWord.length ===0 || rWord.length===0){
            props.showAlert(" Enter the Text to be replaced !", "warning");
        }
        else{
        let newText = text.replaceAll(fWord,rWord);
        setText(newText);
        props.showAlert(" Text has being replaced!", "success");
        }
    }
    
  return (
    <>
    
    <div className='container'>
        <h1  style={{color : props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h1>
        <div className="mb-3" >
            <textarea className="form-control" value={text}  onChange={handleChange} id="TextBox" rows="6" placeholder='Enter you text' style={ {backgroundColor :props.mode === 'dark' ? '#7294f3' :'white' , color : props.mode === 'dark' ? 'white' : 'black' , placeHolder :{color: 'white'} }}> </textarea>
            <textarea className="form-control my-3" value={fWord} onChange={handleFindChange} id="myBox" rows="3 " placeholder='Enter text to find' style={{backgroundColor: props.mode === 'dark'? '#7294f3' : 'white', color: props.mode === 'dark'? 'white' : 'black'}}></textarea>
             <textarea className="form-control my-3" value={rWord} onChange={handleReplaceChange} id="myBox" rows="3 " placeholder='Enter text to be replaced ' style={{backgroundColor: props.mode === 'dark'? '#7294f3' : 'white', color: props.mode === 'dark'? 'white' : 'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUpper}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleLower}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleExtraSpace}>Remove Extra Space</button>
        <button type="button" disabled={text.length===0} className="btn btn-dark mx-2 my-2" onClick={handleReplace}>Replace Text</button>
        <button className="btn btn-success mx-3 my-1"  disabled={text.length===0}onClick={handleCopy}>Copy</button>
        <button className="btn btn-danger mx-3 my-1" disabled={text.length===0}  onClick={handleClear}>Clear</button>

    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>It will take {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read the above writen text.</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "😀Type Something to see preview ....."}...🏃‍♂️</p>
    </div>
    

    </>
  )
}
