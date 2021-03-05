import React from "react";
import Logo from "../pics/Logo.png";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import owSmallLogo from '../pics/ow-sml-logo.png'
import csgoSmallLogo from '../pics/cs-sml-logo.png'
import dotaSmallLogo from '../pics/dota-sml-logo.png'
import lolSmallLogo from '../pics/lol-sml-logo.png'

const Home = (props) => {


    const buttonVariants = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.3,
            }
        }
    }
    const containerVariants = {
        visible: {
            opacity: 1,
            transition: { delay: 1, duration: 1.5 }
        },
        exit: {
            x: "-100vh",
            transition: { ease: 'easeInOut' }
        }
    };

    return (
        <motion.div className="container blue-grey lighten-4"
            variants={containerVariants}
            animate="visible"
            exit="exit"
        >
            <div className="row">
                <div className="col s12 logo-col">
                    <motion.img src={Logo} alt="Liga" animate={{
                        scale: [1, 1.3, 1.2, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                    }} transition={{ duration: 1, delay: 0.3 }}
                        whileHover={{ scale: 1.2 }}
                    />
                </div>
            </div>
            <div className="row">
                <motion.div className="col m6 s12"
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring' }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="card cyan lighten-2">
                        <div className="card-content white-text">
                            <img src={owSmallLogo} alt="Overwatch" />
                            <span className="card-title">Overwatch</span>
                            <p>
                                Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment.
							</p>
                        </div>
                        <div className="card-action">
                            <Link to='/teams'>
                                <motion.button className="waves-effect waves-light btn  light-blue darken-2" value='overwatch' onClick={props.handleGameType}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    Show Teams
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="col m6 s12"
                    initial={{ y: '100vh' }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring' }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <img src={csgoSmallLogo} alt="CS:GO" />
                            <span className="card-title">CS:GO</span>
                            <p>
                                Counter-Strike: Global Offensive is a multiplayer first-person shooter video game developed by Valve and Hidden Path Entertainment.
							</p>
                        </div>
                        <div className="card-action">
                            <Link to='/teams'>
                                <motion.button className="waves-effect waves-light btn grey darken-3" value='csgo' onClick={props.handleGameType}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    Show Teams
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="row">
                <motion.div className="col m6 s12"
                    initial={{ y: '-100vh' }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring' }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="card  deep-orange darken-2">
                        <div className="card-content white-text">
                            <img src={dotaSmallLogo} alt="Dota 2" />
                            <span className="card-title">Dota 2</span>
                            <p>
                                Dota 2 is a multiplayer online battle arena video game developed and published by Valve.
							</p>
                        </div>
                        <div className="card-action">
                            <Link to='/teams'>
                                <motion.button className="waves-effect waves-light btn orange lighten-1" value='dota2' onClick={props.handleGameType}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    Show Teams
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="col m6 s12"
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring' }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="card deep-purple lighten-1">
                        <div className="card-content white-text">
                            <img src={lolSmallLogo} alt="League of Legends" />
                            <span className="card-title">League of Legends</span>
                            <p>
                                League of Legends is a multiplayer online battle arena game developed and published by Riot Games.
							</p>
                        </div>
                        <div className="card-action">
                            <Link to='/teams'>
                                <motion.button className="waves-effect waves-light btn deep-purple accent-2" value='lol' onClick={props.handleGameType}
                                    variants={buttonVariants}
                                    whileHover="hover"
                                >
                                    Show Teams
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};
export default Home;
