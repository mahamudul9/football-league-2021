import React, { useEffect, useState } from 'react';
import image from '../../Images/Photo/stadium-background.jpg'
import Details from '../Details/Details';
import './Home.css'

const Home = () => {
    const [league, setLeague] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeague(data.leagues.slice(0,21)))
    }, [])

    return (
        <div>
            <div className='banner'>
                <img src={image} alt="" />
                <div className='title'><h1>Foootball League 2021</h1></div>
            </div>
            <div className='row leagues'>
                    {league.map(lg => <div className='col-md-4'><Details league={lg}></Details></div>)}
                
            </div>
        </div>
    );
};

export default Home;