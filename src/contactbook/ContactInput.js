import React, {useEffect, useState} from 'react'
import ContactList from './ContactList'

function ContactInput(props) {

    console.log(props);

    let [name,setName] = useState('')
    let [sname,setSname] = useState('')
    let [number,setNumber] = useState('')
    let [email,setEmail] = useState('')
    let [jsonState,setJsonState] = useState({})    
    
    function addItem(){
        fetch('http://localhost:3333/contacts',{
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                name,
                sname,
                number,
                email
            })            
        })
            .then(res=>{
                setName('')
                setSname('')
                setNumber('')
                setEmail('')
                downloadData()
            })
            .catch(err=>{
                console.log(err);
            })
    }
    
    function downloadData(){
        fetch('http://localhost:3333/contacts')
            .then(res=>res.json())
            .then(data=>{
                setJsonState(data)
            })
    }    

    useEffect(()=>{
        downloadData()
    },[])

    return (
        <div className="contact__input">
            <div className="input_list">
                <div className="col">
                    <label for="name">Name</label><input value={name} onChange={e=>setName(e.target.value)}/>
                    <label for="name">SurName</label><input value={sname} onChange={e=>setSname(e.target.value)}/>
                    <label for="name">Number</label><input value={number} onChange={e=>setNumber(e.target.value)}/>
                    <label for="name">Email</label><input value={email} onChange={e=>setEmail(e.target.value)}/>
                    <div className="row">
                        <button className="inp_btn" onClick={addItem}>ADD</button>
                        <div className="mx-5"></div>
                        <button className="inp_btn update" onClick={downloadData}>UPDATE</button>
                    </div>
                    <span className="hr"></span>
                    <ContactList data={jsonState} contactItem={downloadData}/>
                </div>
            </div>                
        </div>
    )
}

export default ContactInput
