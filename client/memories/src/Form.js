import React, {useState, useEffect} from 'react'
import "./Form.css"
import axios from "axios"

function Form() {
    const [creator, setCreator] = useState("");
    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [location, setLocation] = useState("");
    const [msg, setMsg] = useState("");
    const submit = (e) => {
        axios.post('/posts', {
           title: title,
           message: msg,
           creator: creator,
           Location: location,
           tags: tags,
        });
        setCreator("");
        setTitle("");
        setTags("");
        setLocation("");
        setMsg("");
    }
    return (
        <div className="form">
        <h3 style={{textAlign:"center", fontSize:"26px", fontFamily:"cursive", marginBottom:"10px"}}>Create Memories💙</h3>
         <form width="100%">
         <h3 style={{fontSize:"19px", fontFamily:"cursive", marginBottom:"10px"}}>Creator: 💙</h3>
             <input type = "text" onChange={e => setCreator(e.target.value)}></input>
             <h3 style={{fontSize:"19px", fontFamily:"cursive", marginBottom:"10px"}}>Title💙</h3>
             <input type = "text" onChange={e => setTitle(e.target.value)}></input>
             <h3 style={{ fontSize:"19px", fontFamily:"cursive", marginBottom:"10px"}}>Tags 💙</h3>
             <input type = "text" onChange={e => setTags(e.target.value)}></input>
             <h3 style={{ fontSize:"19px", fontFamily:"cursive", marginBottom:"10px"}}>Location 💙</h3>
             <input type = "text"onChange={e => setLocation(e.target.value)}></input>
             <h3 style={{ fontSize:"19px", fontFamily:"cursive", marginBottom:"10px"}}>Message 💙</h3>
             <input type = "text" onChange={e => setMsg(e.target.value)}></input>
             <h3 style={{ fontSize:"19px", fontFamily:"cursive", marginBottom:"10px"}}>Snap💙</h3>
             <input type = "file" ></input>
             <center>
            <button type="submit" onClick={submit} style={{marginTop:"15px", backgroundColor:"#64B5F6", borderRadius:"20px", width:"200px"}}><h3 style={{ fontSize:"21px", fontFamily:"cursive"}}>CREATE💙</h3></button>
            </center>
         </form>
        </div>     
    )
}

export default Form
