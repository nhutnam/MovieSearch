import React, { useState } from 'react';

const Form = () => {
    // const [fullname, setFullName] = useState("");
    // const [message, setMessage] = useState("");
    // const [country, setCountry] = useState("");
    // const handleInoutChange = (e) => {
    //     setFullName(e.target.value)
    // }
    // const handleTextareaChange = (e) => {
    //     setMessage(e.target.value)
    // }
    // const handleSelectChange = (e) => {
    //     setCountry(e.target.value)
    // // }

    const [values, setValues] = useState({
        fullname: "",
        email: "",
    });
    console.log("From ~ values", values);

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='p-5'>
            <div className="flex gap-x-3">
                {/* {fullname} */}
                <input type="text" 
                    name="fullname" 
                    className="w-full max-w-[300px] p-3 outline-none border border-gray-100 rounded-lg"
                    placeholder="Enter your name"
                    onChange={handleInputChange}
                />
                <input type="email" 
                    name="email" 
                    className="w-full max-w-[300px] p-3 outline-none border border-gray-100 rounded-lg"
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                />
            </div>
                {/* {message}
                <textarea 
                    className='w-full max-w-[300px] p-3 outline-none border border-gray-100 rounded-lg'
                    placeholder='Enter your message'
                    name='message'
                    onChange={handleTextareaChange}
                > 
                </textarea>
                {country}
                <select name="Country" onChange={handleSelectChange}>
                    <option value="vietnam">VN</option>
                    <option value="usa">USA</option>
                    <option value="japan">JAPAN</option>
                </select> */}
        </div>
    );
};

export default Form;