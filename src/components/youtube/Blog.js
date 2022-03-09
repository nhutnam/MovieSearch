import React,{useEffect, useRef} from 'react';
import useHover from "../hook/useHover";


const Blog = () => {
    const {hovered, nodeRef} = useHover();
    return (
        <div className='entry-content'>
            <p className='mb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias mollitia tempora, debitis eveniet enim blanditiis vitae sint impedit excepturi inventore explicabo, dolorem repellendus, odit nam. Accusantium cumque voluptas recusandae omnis.
            <a href=""></a>
            </p>
        </div>
    );
};

export default Blog;