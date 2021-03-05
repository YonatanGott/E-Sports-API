import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCsgoTeams, getAllDotaTeams, getAllLolTeams, getAllOwTeams, } from '../lib/api';
import TeamCard from './TeamCard';
import overwatchLogo from '../pics/overwatch-logo.png'
import csgoLogo from '../pics/csgo-logo.png'
import dotaLogo from '../pics/dota2-logo.png'
import lolLogo from '../pics/lol-logo.png'
import { motion } from "framer-motion";



const Teams = (props) => {
    const [teams, setTeams] = useState([])
    const [title, setTitle] = useState('')
    const [color, setColor] = useState('')
    const [buttonColor, setButtonColor] = useState('')
    const [logo, setLogo] = useState(null)

    const homeClass = "btn-floating btn-large pulse home-btn left" + color;
    //const [error, setError] = useState('')


    //Get Teams from api

    const getOwTeams = async () => {
        let teams = await getAllOwTeams();
        setTeams(teams);
    }
    const getCSTeams = async () => {
        let teams = await getAllCsgoTeams();
        setTeams(teams);
    }
    const getLolTeams = async () => {
        let teams = await getAllLolTeams();
        setTeams(teams);
    }
    const getDotaTeams = async () => {
        let teams = await getAllDotaTeams();
        setTeams(teams);
    }

    // On Render

    useEffect(() => {
        switch (props.gameType) {
            case 'overwatch':
                setTitle('Overwatch');
                setColor(" cyan lighten-2");
                setButtonColor(" blue-grey lighten-2")
                setLogo(overwatchLogo);
                getOwTeams();
                break;
            case 'csgo':
                setTitle('Counter-Strike: Global Offensive');
                setColor(" blue-grey darken-1");
                setButtonColor(" amber accent-3")
                setLogo(csgoLogo)
                getCSTeams();
                break;
            case 'dota2':
                setTitle('Dota 2');
                setColor(" deep-orange darken-2");
                setButtonColor(" grey darken-3")
                setLogo(dotaLogo)
                getDotaTeams();
                break;
            case 'lol':
                setTitle('League of Legends');
                setColor(" deep-purple lighten-1");
                setLogo(lolLogo)
                getLolTeams();
                break;
            default:
                setTitle('No Game Chosen')
        }
    }, [props.gameType])

    //Animation
    const containerVariants = {
        visible: {
            opacity: 1,
            transition: { delay: 1, duration: 1.5 }
        },
        exit: {
            x: "100vw",
            transition: { ease: 'easeInOut' }
        }
    };


    return (
        <motion.div className="container"
            variants={containerVariants}
            animate="visible"
            exit="exit"
        >
            <div className="row">
                <div className="col s12">
                    <Link to='/'>
                        <button className={homeClass}><i className="material-icons">home</i></button>
                    </Link>
                    <img className="game-logo" src={logo} alt={title} />
                </div>
            </div>
            <div className="row">
                {
                    teams.map((team) => {
                        return <TeamCard key={team.id} team={team} color={color} gameType={props.gameType} buttonColor={buttonColor} handleTeamPage={props.handleTeamPage} handleOpenModal={props.handleOpenModal} />;
                    })
                }
            </div>
        </motion.div>
    )
}
export default Teams;