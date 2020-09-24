import React, { useState } from 'react'

function ContactItem(props) {

    let data = props.data
    let [isEdit, setIsEdit] = useState(false)
    let [name,setName] = useState(data.name)
    let [sname,setSname] = useState(data.sname)
    let [number,setNumber] = useState(data.number)
    let [email,setEmail] = useState(data.email)

    function deleteItem(){
        console.log(`DeleteItem with ${data.id} ID.`);
        fetch('http://localhost:3333/contacts/' + data.id,{
            method: "DELETE",
            headers:{'Content-Type':'application/json'}            
        })
            .then(res=>{
                props.upDate()
            })
            .catch(err=>{
                console.log(err);
            })
    }
    function accessItem(){
        setIsEdit(!isEdit)
        console.log(`EditItem with ${data.id} ID.`);
        fetch('http://localhost:3333/contacts/' + data.id,{
            method: "PATCH",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name,
                sname,
                number,
                email
            })          
        })
            .then(res=>{                
                props.upDate()
            })
            .catch(err=>{
                console.log(err);
            })        
    }

    return (
        <div className="contact_item">
            <div className="col">
                <div className="item_list">
                    <div className="bb">Contact ID: <span>{data.id}</span></div>
                    <div>Name: <span>{isEdit ? (<div><input value={name} onChange={(e)=>setName(e.target.value)}></input></div>):(<div>{data.name}</div>)}</span></div>
                    <div>Surname: <span>{isEdit ? (<div><input value={sname} onChange={(e)=>setSname(e.target.value)}></input></div>):(<div>{data.sname}</div>)}</span></div>
                    <div>Number: <span>{isEdit ? (<div><input value={number} onChange={(e)=>setNumber(e.target.value)}></input></div>):(<div>{data.number}</div>)}</span></div>
                    <div>Email: <span>{isEdit ? (<div><input value={email} onChange={(e)=>setEmail(e.target.value)}></input></div>):(<div>{data.email}</div>)}</span></div>
                    <div className="row bt">
                        {isEdit ?
                        <button className="btn_item ok" onClick={accessItem}>OK</button> :
                        <button className="btn_item edit" onClick={()=>setIsEdit(!isEdit)}>Edit</button>
                        }
                        <button className="btn_item delete" onClick={deleteItem}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactItem
