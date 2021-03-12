import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueInfo.css';
import maleImage from '../../Images/Photo/male.png'
import femaleImage from '../../Images/Photo/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faFlag, faFutbol, faMars} from '@fortawesome/free-solid-svg-icons'
import twitter from '../../Images/Icon/Twitter.png'
import facebook from '../../Images/Icon/Facebook.png'
import youtube from '../../Images/Icon/YouTube.png'

const LeagueInfo = () => {
    let { idLeague } = useParams();
    const [link, setLink] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setLink(data.leagues[0]))
    }, [])
    // console.log(link);
    const setImage=()=>{
        if(link.strGender==='Male'){
            return <img src={maleImage} alt=""/>
        }
        else if(link.strGender==='Female'){
            return <img src={femaleImage} alt=""/>
        }
    }
    
    return (
        <div className="league-info">
            <div className='league-banner col'>
                <img className='first-banner' src={link.strFanart4} alt=""/>
                <img className='logo' src={link.strLogo} alt="" />
            </div>
            <div className='league-card container row'>
                <div className='card-text col-md-6'  >
                    <h3><b>{link.strLeague}</b></h3><br/>
                    <p><b><FontAwesomeIcon icon={faMapPin} />  Founded: {link.dateFirstEvent}</b></p>
                    <p><b><FontAwesomeIcon icon={faFlag} />  Country: {link.strCountry}</b></p>
                    <p><b><FontAwesomeIcon icon={faFutbol} />  Sports Type: {link.strSport}</b></p>
                    <p><b><FontAwesomeIcon icon={faMars} />  Gender: {link.strGender}</b></p>
                </div>
                <div className='col-md-6'>{setImage()}</div> 
            </div> 
            <div className='description container col'>
                <p>{link.strDescriptionEN}</p>
            </div> 
            <div className='social-link col'>               
               <a href='https://twitter.com/premierleague' target="_blank"><img src={twitter} alt=""/></a>
               <a href='https://en-gb.facebook.com/premierleague' target="_blank"><img src={facebook} alt=""/></a>
               <a href='https://youtube.com/channel/UCG5qGWdu8nIRZqJ_GgDwQ-w' target="_blank"><img src={youtube} alt=""/></a>               
            </div>     
        </div>
    );
};

export default LeagueInfo;