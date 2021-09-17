import React from 'react';
import './Pagination.css'

export const Pagination =
({usersPerPage, allElements, paginate, filteredData, prevPage, nextPage}) => {

    const pageNumberds = []

    for(let i = 1; i <= Math.ceil(allElements/usersPerPage); i++){
    pageNumberds.push(i)
    }
    return(
        <>
        <div className="pagination">
            <h3>Pages found:</h3>
            <ul>
              {pageNumberds.map(number => (
                  <li key={number}>
                      <a href="!#" onClick={() => paginate(number)}>{number}</a>
                  </li>
                  ))}
            </ul>
        </div>
        <div className="buttonsPagination">
            {filteredData.length > usersPerPage
                ?
                <>
                <button onClick={prevPage}>Prev</button>
                <button onClick={nextPage}>Next</button>
                </>
                :
                null
            }
        </div>
        </>
    )
}

