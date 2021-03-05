import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = (props) => {
    const team = props.team;


    // Animation
    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const modal = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: {
            y: "200px",
            opacity: 1,
            transition: { delay: 0.5 }
        },
    };

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };


    return (
        <AnimatePresence>
            { props.showModal && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    onClick={props.handleCloseModal}
                >
                    <motion.div className="modal"
                        variants={modal}
                    >
                        <img className="team-image" src={team.image_url} alt="No Team Logo" />
                        <h2 className="modal-team-title">{team.name}</h2>
                        <motion.ul className="team-players-list"
                            variants={container}
                            initial="hidden"
                            animate="visible"
                        >
                            {
                                team.players.map((player) => {
                                    if (player.role) {
                                        return <motion.li className="modal-player" key={player.id} variants={item} whileHover={{ scale: 1.2 }} >{player.name} - {player.role}</motion.li>
                                    } else {
                                        return <motion.li className="modal-player" key={player.id} variants={item} whileHover={{ scale: 1.2 }} >{player.name}</motion.li>
                                    }
                                })
                            }
                        </motion.ul>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;

