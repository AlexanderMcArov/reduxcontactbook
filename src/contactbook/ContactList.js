import React from 'react'
import ContactItem from './ContactItem'

function ContactList(props) {

    let data = props.data
    let upDate = props.contactItem
    let toItem = []
    console.log('Вызов');

    if(data.length === undefined){
        console.log('DATA пустой');
        data = []
    }else{
        toItem = data.map((item,index) => {
            return <ContactItem key={index+'-todoItem'} data={item} upDate={upDate}/>
        })
    }
    
    return (
        <div className="contact_list">
            <div className="col">
                {console.log('Срабатывает.')}
                {toItem.length > 0 ? toItem : 'Список пустой.'}
            </div>
        </div>
    );
    
}

export default ContactList
