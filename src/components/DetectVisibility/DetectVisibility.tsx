import React, {useEffect, useRef} from "react";

interface Props {
    onVisible: () => void;
}

const DetectVisibility : React.FC<Props> = ({ onVisible}) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkInView = () => {
            const rect = elementRef.current?.getBoundingClientRect();
            if (rect?.top && rect.top < window.innerHeight) {
                onVisible?.();
                document.removeEventListener("scroll", checkInView)
            }
        };
        document.addEventListener("scroll", checkInView);

        return () => document.removeEventListener("scroll", checkInView);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div ref={elementRef} />
}

export default DetectVisibility;