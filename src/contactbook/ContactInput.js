import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {contactAddItem} from '../redux/actions/contactbook'

function ContactInput(props) {

    let [name,setName] = useState('')
    let [sname,setSname] = useState('')
    let [number,setNumber] = useState('')
    let [email,setEmail] = useState('')
     
    const dispatch = useDispatch()
    
      
    // useEffect(()=>{
    //     downloadData()
    // },[])

    return (
        <div className="contact__input">
            <div className="input_list">
                <div className="col">
                    <label htmlFor="name">Name</label><input value={name} onChange={e=>setName(e.target.value)}/>
                    <label htmlFor="name">SurName</label><input value={sname} onChange={e=>setSname(e.target.value)}/>
                    <label htmlFor="name">Number</label><input value={number} onChange={e=>setNumber(e.target.value)}/>
                    <label htmlFor="name">Email</label><input value={email} onChange={e=>setEmail(e.target.value)}/>
                    <div className="row">
                        <button className="inp_btn" onClick={()=>dispatch(contactAddItem({
                                        name,
                                        sname,
                                        number,
                                        email
                                    }))}>ADD
                        </button>
                        <div className="mx-5"></div>
                    </div>
                    <span className="hr"></span>
                </div>
            </div>                
        </div>
    )
}

export default ContactInput
