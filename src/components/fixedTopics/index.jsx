import { useEffect } from "react";
import { useState } from "react";



export default function FixedTopicsTop({ children }) {

    const [fixed, setFixed] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        if (position >= 30) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    };


    useEffect(() => {

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={` ${fixed && "fixedTopicsTop shadow"} `}>
            {children}
        </div>


    )

}