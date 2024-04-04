import React, { useRef } from "react";

const Home=()=>
{
    const hiddenFileInput =useRef(null);
    const handleHere=()=>
    {
        hiddenFileInput.current.click(); 
    
    }
    return(<div className="home-bg">
        <div className="home-main">
            <div className="heading">Hello User, welcome to Euler</div>
            <div className="desc">
                Euler adapts to your learning style for a 
                truly personalized experience using AI
            </div>
            <div className="home-input-box">
                <div className="user-input">
                    <div>
                        I am a
                        <input type="text"  placeholder="college student" className="user-info"/>
                    </div>
                    <div >
                        Teach me about  
                        <input  type="text" placeholder="topic" className="topic-input"/>
                    </div>
                </div>
                <div className="or">OR</div>
                <div className="user-input">
                    <div>Upload your Notes</div>
                    <button className="notes-upload" onClick={handleHere}>here</button>
                    <input  type="file"  ref={hiddenFileInput} style={{display:'none'}}/>
                </div>
            </div>
        </div>
    </div>)
}

export default Home;