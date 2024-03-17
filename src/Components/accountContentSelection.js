import React from 'react';
import '../Styles/AccContent.css';
import SocialCard from '../Components/PostRender';

const PostContent = () => {
    return (
        <div>
            <div className="forumContainer">
                <div className="forumContent">
                    <div className="CardShadow">
                        <SocialCard />
                    </div>
                </div>
            </div>
        </div>
    )
}


const SubContent = () => {
    return (
        <div>
            <div className='SubContent'>

                <div className="ContentContainer">
                    
                        <img src="/premium.png" alt="premium" />
                        <h3>Subscription Content</h3>
                    
                </div>

                <div className='loacator'>
                    <button class="unlock-button"><img src="/lock.png" alt="unlock" /> Unlock</button>
                </div>


            </div>
            
        </div>
    )
}





const MentionContent = () => {
    return (
        <div>
            <div className='SubContent'>

                <div className="ContentContainer">
                    
                        <img src="/mention.png" alt="mention" />
                        <h3>No mention yet</h3>
                    
                </div>

                


            </div>
        </div>
    )
}


export { PostContent, SubContent, MentionContent };

