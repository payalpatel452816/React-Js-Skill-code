import React from 'react';
import './style.css';
import reactImage from '../task/download.jpg'; 
import jsImage from '../task/pic.jpg'; 
import pythonImage from '../task/img.jpg'; 

const ListRendering = () => {
    const courses = [
        {id: 1, title: 'React', author: 'John Doe', image: reactImage}, 
        {id: 2, title: 'JavaScript', author: 'Jane Smith',  image: jsImage},
        {id: 3, title: 'Python', author: 'Bob Johnson', image: pythonImage},
    ];

    const arrayDataItems = courses.map(course => 
        <li key={course.id}>
            <img src={course.image} alt={course.title}  />
            <h1 >{course.title}</h1>
            <p>{course.author}</p>
        </li>
    );

    return (
        <div className="container">
            <div>
                <h1 className='heading'>Render List/Array of Items with Key</h1>
            </div>
            <ul className='card'>{arrayDataItems}</ul>
        </div>
    );
};

export default ListRendering;
