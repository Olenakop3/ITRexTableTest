import React from 'react';
import { useState} from 'react';
import { useSortableData } from './Sorting';
import './Users.css'

export const Users = ({data}) => {
    const [showCard, setShowCard] = useState('none');

    const { users, requestSort, sortConfig } = useSortableData(data);

    const ShowOnClick = (cardId) =>{
        setShowCard(cardId)
    } 

    const CloseOnClick = (e) => {
        e.stopPropagation();
        setShowCard('none')
    }
    
    const getClassNamesFor = (user) => {
        if (!sortConfig) {
          return;
        }
        return sortConfig.key === user ? sortConfig.direction : undefined;
    };

    if (!data) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
    <table className="table">
        <thead>
            <tr>
                <th onClick={() => requestSort('id')}
                    className={getClassNamesFor('id')}>id</th>
                <th onClick={() => requestSort('firstName')}
                    className={getClassNamesFor('firstName')}>firstName</th>
                <th onClick={() => requestSort('lastName')}
                    className={getClassNamesFor('lastName')}>lastName</th>
                <th onClick={() => requestSort('email')}
                    className={getClassNamesFor('email')}>email</th>
                <th onClick={() => requestSort('email')}
                    className={getClassNamesFor('phone')}>phone</th>
                <th onClick={() => requestSort('email')}
                    className={getClassNamesFor('state')}>state</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user, index) => (                        
                <tr onClick={() => ShowOnClick(index)} key={index}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.adress.state}</td>
                    <td>
                    <div  className="card" style={{display: showCard === index ? 'grid' : 'none'}}>
                    <h3>Profile info:</h3>                            
                    <div className="stat">                                
                    <p><b>Selected profile: </b>{user.firstName} {user.lastName}</p>
                    </div>
                    <div className="stat">                                
                    <p><b>Description: </b>{user.description}</p>
                    </div>
                    <div className="stat">                                
                    <p><b>Address: </b>{user.adress.zip}, {user.adress.streetAddress}</p>
                    </div>
                    <div className="stat">                                
                    <p><b>City: </b>{user.adress.city}</p>
                    </div>
                    <div className="stat">                                
                    <p><b>State: </b>{user.adress.state}</p>
                    </div>
                    <div className="stat">                                
                    <p><b>Index: </b>{user.id}</p>
                    </div>
                    <button onClick={CloseOnClick} className="btn">OK</button>
                </div>                
                    </td>           
                </tr>
            ))}
        </tbody>
    </table>
    )
};


