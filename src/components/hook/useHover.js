import { useEffect, useRef, useState } from "react";

export default function useHover() {
    const [hovered, setHovered] = useState(false);
    const nodeRef = useRef(null);
    useEffect(() => {
        function handleMouseOver() {
            setHovered(true);
        }function handleMouseOut() {
            setHovered(false);
        }
        const dom = nodeRef.current;
        if(dom) {
            dom.addEventListener("mouseOver", handleMouseOver);
            dom.addEventListener("mouseOut", handleMouseOut);
        }
        return () => {
            if(dom) {
            dom.removeEventListener("mouseOver", handleMouseOver);
            dom.removeEventListener("mouseOut", handleMouseOut);
            }
        }
    },[]);
    return {
        hovered,
        nodeRef,
    };
}