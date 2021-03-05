import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = (props) => {
    const team = props.team;


    // Animation
    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const modal = {
        hidden: { y: "-100vh", opacity: 0 },
        visible: {
            y: "200px",
            opacity: 1,
            transition: { delay: 0.5 }
        },
    }

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
                        <h2>{team.name}</h2>
                        <ul className="team-players-list">
                            {
                                team.players.map((player) => {
                                    if (player.role) {
                                        return <li className="modal-player" key={player.id}>{player.name} - {player.role}</li>
                                    } else {
                                        return <li className="modal-player" key={player.id}>{player.name}</li>
                                    }
                                })
                            }
                        </ul>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal;

