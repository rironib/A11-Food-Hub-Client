import { useState, useEffect } from 'react';

function useTimestamp() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []); // Empty dependency array ensures effect runs only once on mount

    // Format the date to yyyy-mm-dd format
    const timestamp = currentTime.toISOString().slice(0, 10);

    return {timestamp};
}

export default useTimestamp;
