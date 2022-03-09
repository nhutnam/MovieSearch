import React, { useEffect, useRef, useState } from 'react';

const TextareaAutoResize = () => {
    const [text, setText] = useState("");
    const textAreaRef = useRef(null);
    const [textAreaHeight, setTextAreaHeight] = useState("auto")
    const [parentHeight, setparentHeight] = useState("auto")

    const handleChange = (e) => {
        setparentHeight("auto");
        setText(e.target.value)
    };

    useEffect(() => {
        setTextAreaHeight(`${textAreaRef?.current?.scrollHeight}px`);
    },[text])

    return (
        <div className='p-5' style={{
                minHeight: parentHeight,
            }}>
            <textarea 
                className='w-full transition-all overflow-hidden max-w-[400px] p-5 rounded-lg border-gray-300 focus:border-blue-400 resize-none'
                placeholder='Please enter your content...'
                value={text}
                ref={textAreaRef}
                style={{
                    height: textAreaHeight,
                }}
                onChange={handleChange}
            ></textarea>
        </div>
    );
};

export default TextareaAutoResize;