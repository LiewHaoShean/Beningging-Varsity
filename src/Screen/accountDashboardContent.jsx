import React, { useState } from 'react';
import '../Styles/forumAccountContent.css';
import { PostContent, SubContent, MentionContent } from '../Components/accountContentSelection';


const ForumAccountContent = () => {
    const [activeContent, setActiveContent] = useState('post');

    const handleContentChange = (content) => {
        setActiveContent(content);
    };

    return (
        <div>
            <div className='optionBar'>
                <button onClick={() => handleContentChange('post')}>
                    <img src="/more_3161837.png" alt="post" />
                </button>
                <button onClick={() => handleContentChange('sub')}>
                    <img src="/sub.png" alt="Subsription Content" />
                </button>
                <button onClick={() => handleContentChange('mention')}>
                    <img src="/mention.png" alt="mention" />
                </button>
            </div>
            <div>
                {activeContent === 'post' && <PostContent />}
                {activeContent === 'sub' && <SubContent />}
                {activeContent === 'mention' && <MentionContent />}
            </div>
        </div>
    );
};

export default ForumAccountContent;



