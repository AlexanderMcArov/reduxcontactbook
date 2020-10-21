import React, {useEffect} from 'react'
import ContactItem from './ContactItem'
import {useSelector,useDispatch} from 'react-redux'
import {contactUpdateItems} from '../redux/actions/contactbook'

function ContactList() {

    const dispatch = useDispatch()
    const data = useSelector(state=>{
        return state.contactReducer.contacts
    })  

    useEffect(()=> {
        dispatch(contactUpdateItems())
        console.log('EFFECT');
    },[])

    let bookList = data.map(item=>{
        return <ContactItem data={item} key={item.id + '-contact'}/>
    })

    return (
        <div className="contact_list">
            <div className="col">
                {console.log('Return')}
                {bookList}
            </div>
        </div>
    );
    
}

export default ContactList
