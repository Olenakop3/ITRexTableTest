import React from 'react'
import { Header } from '../functions/Header';
import { Users } from '../functions/Users';
import { Pagination } from '../functions/Pagination';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [data, setData] = useState();
    const [searchfield, setSearchfield] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(20)
    const [state, setState] = useState('');

    useEffect(() => {
        setCurrentPage(1)
        const fetch = async () => {
            try{
                const res = await axios.get('https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json');
                setData(res.data);
            }catch(error){
                console.log(error);
            }
        };
        fetch();
    }, []);
    
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const handleSelect = (event) => {
      setState(event.target.value);
    };

    const filteredData = data?.filter(
        dat => dat.firstName.toLowerCase().includes(searchfield.toLowerCase()) &&         
        dat.adress.state.toLowerCase().includes(state.toLocaleLowerCase())
    ) ?? [];

  const lastUsersPage = currentPage * usersPerPage
  const firstUsersPage = lastUsersPage - usersPerPage
  const currentUsersPage = filteredData.slice(firstUsersPage, lastUsersPage)

  const paginate = (pageNumber) => {setCurrentPage(pageNumber)}
  const nextPage = () => setCurrentPage(pv => pv + 1)
  const prevPage = () => setCurrentPage(pv => pv - 1)
      return (
          <div className="main-container">          
              <Pagination 
                  usersPerPage={usersPerPage} 
                  allElements={filteredData.length}
                  paginate={paginate}
                  filteredData={filteredData}
                  nextPage={nextPage}
                  prevPage={prevPage}
              />
              <Header searchChange={onSearchChange} handleSelect={handleSelect} currentUsersPage={currentUsersPage} />
          <div className="users">
              <Users data={currentUsersPage}/>
          </div>
        </div>
      )
}

export default Home;
