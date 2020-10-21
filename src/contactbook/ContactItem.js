import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { contactDeleteItem, contactEditItem } from '../redux/actions/contactbook'

function ContactItem(props) {

  const dispatch = useDispatch()

  let data = props.data
  let [isEdit, setIsEdit] = useState(false) // меняет состояние item'a на "редактирование"
  let [name, setName] = useState(data.name)
  let [sname, setSname] = useState(data.sname)
  let [number, setNumber] = useState(data.number)
  let [email, setEmail] = useState(data.email)

  function deleteItem() {
    console.log(`DeleteItem with ${data.id} ID.`);
    dispatch(contactDeleteItem(data.id))
  }
  function accessItem() {
    setIsEdit(!isEdit)
    console.log(`EditItem with ${data.id} ID.`);
    dispatch(contactEditItem({
      id: data.id,
      name: name,
      sname: sname,
      number: number,
      email: email
    }))
  }

  return (
    <div className="contact_item">
      <div className="col">
        <div className="item_list">
          <div className="bb">Contact ID: <span>{data.id}</span></div>
          <div>Name: <span>{isEdit ? (<div><input value={name} onChange={(e) => setName(e.target.value)}></input></div>) : (<div>{data.name}</div>)}</span></div>
          <div>Surname: <span>{isEdit ? (<div><input value={sname} onChange={(e) => setSname(e.target.value)}></input></div>) : (<div>{data.sname}</div>)}</span></div>
          <div>Number: <span>{isEdit ? (<div><input value={number} onChange={(e) => setNumber(e.target.value)}></input></div>) : (<div>{data.number}</div>)}</span></div>
          <div>Email: <span>{isEdit ? (<div><input value={email} onChange={(e) => setEmail(e.target.value)}></input></div>) : (<div>{data.email}</div>)}</span></div>
          <div className="row bt">
            {isEdit ?
              <button className="btn_item ok" onClick={accessItem}>OK</button> :
              <button className="btn_item edit" onClick={() => setIsEdit(!isEdit)}>Edit</button>
            }
            {isEdit ? <button className="btn_item delete" onClick={() => {
              setIsEdit(!isEdit)
              setName(data.name)
              setSname(data.sname)
              setNumber(data.number)
              setEmail(data.email)
            }}>Cancel</button> :
              <button className="btn_item delete" onClick={deleteItem}>Delete</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactItem
