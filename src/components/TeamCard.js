import React, { useState } from 'react';
import { motion } from "framer-motion"
import owSmallLogo from '../pics/ow-sml-logo.png'
import csgoSmallLogo from '../pics/cs-sml-logo.png'
import dotaSmallLogo from '../pics/dota-sml-logo.png'
import lolSmallLogo from '../pics/lol-sml-logo.png'


const TeamCard = (props) => {
    const cardClass = "card" + props.color;
    const [teamImage, setTeamImage] = useState(props.team.image_url)
    const buttonClass = "waves-effect waves-light btn" + props.buttonColor

    // Team string to send on value 
    const teamStr = JSON.stringify(props.team);

    // Set team logo 
    if (!teamImage) {
        switch (props.gameType) {
            case 'overwatch':
                setTeamImage(owSmallLogo)
                break;
            case 'csgo':
                setTeamImage(csgoSmallLogo)
                break;
            case 'dota2':
                setTeamImage(dotaSmallLogo)
                break;
            case 'lol':
                setTeamImage(lolSmallLogo)
                break;
            default:
                setTeamImage(null)
        }
    }

    return (
        <div className="col s6 m3" >
            <motion.div className={cardClass}
                initial={{ y: '100vh' }}
                animate={{ y: 0 }}
                transition={{ type: 'spring' }}
                whileHover={{ scale: 1.09 }}
            >
                <div className="card-image small">
                    <img className="team-image" src={teamImage} alt="No Team Logo" />
                </div>
                <div className="card-content">
                    <h5 className="team-card-name">
                        {props.team.name}
                    </h5>
                    <button className={buttonClass} value={teamStr} onClick={props.handleTeamPage} >Team Info</button>
                </div>
            </motion.div>
        </div>
    )

}
export default TeamCard;