import { useState } from 'react';
import './App.css';
const data = require('./data');
export default function Search() {
    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        console.log("search ", searchTerm);
    };


    return (
        <div className="App">

            <div className="search-container">
                <div className="search-inner">
                    <input type="text" value={value} onChange={onChange} />
                    <button onClick={() => onSearch(value)}> Search </button>
                </div>
                <div className="dropdown">
                    {data
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.title.toLowerCase();

                            return (
                                searchTerm &&
                                fullName.startsWith(searchTerm) &&
                                fullName !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <div
                                onClick={() => onSearch(item.title)}
                                className="dropdown-row"
                                key={item.title}
                            >
                                {item.title}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

