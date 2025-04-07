import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Title_2() {
    const [title, setTitle] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setTitle(res.data.slice(0, 10))); // showing only 10
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = title.slice(indexOfFirstPost, indexOfLastPost);

    const nextPage = () => {
        if (currentPage < Math.ceil(title.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <h1>Titles</h1>
            {currentPosts.map((post) => (
                <ul key={post.id}>
                    <li>
                        <Link to={`/exp/${post.id}`}>{post.title}</Link>
                    </li>
                </ul>
            ))}

            <div>
                <button onClick={prevPage} > Previous </button>
                <span>{currentPage}</span>
                <button onClick={nextPage}>Next </button>
            </div>
        </div>
    );
}

export default Title_2;
