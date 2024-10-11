import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './VotingHandling.module.css'; // Import your CSS module

const VotingHandling = () => {
    const [votes, setVotes] = useState({ manhwa: 0, anime: 0 });

    useEffect(() => {
        axios.get('http://localhost:4000/votes')
            .then(res => { setVotes(res.data) })
            .catch(error => { console.error("error fetching the vote data", error) });
    }, []);

    const handleVote = (type) => {
        axios.post('http://localhost:4000/vote', { type })
            .then(res => { setVotes(res.data) })
            .catch(error => { console.error("error voting", error) });
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Vote for Your Favorite Version</h2>
            <div className={styles.buttonContainer}>
                <button onClick={() => handleVote('manhwa')} className={styles.button}>Vote Manhwa</button>
                <button onClick={() => handleVote('anime')} className={styles.button}>Vote Anime</button>
            </div>
            <div className={styles.votesContainer}>
                <p className={styles.voteText}><strong className={styles.boldText}>Manhwa Votes:</strong> {votes.manhwa}</p>
                <p className={styles.voteText}><strong className={styles.boldText}>Anime Votes:</strong> {votes.anime}</p>
            </div>
        </div>
    );
};

export default VotingHandling;
