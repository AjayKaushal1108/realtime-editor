import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a New Room');
    };
    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username are required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,  //to access the user
            },
        });
    };
    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };

    return (
        <div className='homePageWrapper'>
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="/logo.png"
                    alt="logo"
                />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia"></link>
                <h1 className="homePageSlogan">Let's Collab🤝</h1>
                <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />     
                    <button className="btn joinBtn" onClick={joinRoom}>
                            Join
                    </button>
                    <span className="createInfo">
                        Don't have an invitation? Let's create &nbsp;
                        <a onClick={createNewRoom} href="" className="createNewBtn">
                            New Room
                        </a>
                    </span>
                </div>
            </div>

            <footer>
                <h4>
                    Built by <a href='https://trailblazer.me/id/akaushal26'>AB❤Kaushal</a>
                </h4>
            </footer>
        </div>
        
    );
};
export default Home;