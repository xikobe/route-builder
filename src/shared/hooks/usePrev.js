import { useEffect, useRef } from 'react';

/* downloaded here https://usehooks.com/usePrevious/ */

const usePrev = value => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]); // Only re-run if value changes

    return ref.current;
};

export default usePrev;
