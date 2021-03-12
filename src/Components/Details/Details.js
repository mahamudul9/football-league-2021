import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Details.css'
import { Link } from 'react-router-dom';

const Details = (props) => {
    const {idLeague,strLeague,strSport}= props.league;
    // console.log(props.league);
    const [id, setId]=useState([]);
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res=>res.json())
        .then(data=>setId(data.leagues[0]))
    },[])
    console.log(id);
    return (
        <div className='card-show'>
            <img src={id.strBadge} alt=""/>
            <h3>{strLeague}</h3>
            <p>Sports type: {strSport}</p>
            <Link to={'/details/'+idLeague}><button  className='btn btn-success'>Explore <FontAwesomeIcon icon={faArrowRight} /></button></Link>
        </div>
    );
};

export default Details;