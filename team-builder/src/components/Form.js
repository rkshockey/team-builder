import React, { useState } from 'react';

function Form (props){
    const { values, change, submit } = props;

    const changeForm = (evt => {
        const { name, value } = evt.target;
        change(name, value);
    })

    const submitForm = (evt => {
        evt.preventDefault();
        submit()
    })

    return (
        <form onSubmit={submitForm}>
            <input type='text' id='name' name='name' value={values.name} placeholder='Member Name' onChange={changeForm} />
            <input type='email' id='email' name='email' value={values.email} placeholder='Member Email' onChange={changeForm} />
            <select id='role' name='role' onChange={changeForm} value={values.role}>
                <option value=''>--Select a Role--</option>
                <option value='Frontend Engineer'>Frontend Engineer</option>
                <option value='Backend Engineer'>Backend Engineer</option>
                <option value='Designer'>Designer</option>
                <option value='Data Scientist'>Data Scientist</option>
                <option value='Team Lead'>Team Lead</option>
            </select>
            <button>Submit</button>
        </form>
    );
}

export default Form;