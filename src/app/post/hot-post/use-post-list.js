import { useState, useEffect } from 'react';

const usePostList = () => {
    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPostList = async () => {
            try {
                const response = await fetch('http://localhost:3001/postList');//这里也可以使用我们自己封装的 axios-service
                const data = await response.json();
                setPostList(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching post list:', error);
                setIsLoading(false);
            }
        };
        fetchPostList();
    }, []);

    return { postList, isLoading };
};

export default usePostList;