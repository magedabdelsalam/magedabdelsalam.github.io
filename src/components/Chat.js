import Profile from '../assets/maged.png'

const Chat = ({title,content,action}) => {
    return(
        <div className='chat'>
            <div className='chatAuthor'>
                <img src={Profile}/>
            </div>
            <div className='chatContent'>
                <h1>{title}</h1>
                <p>{content}</p>
                {action ? <button>{action}</button> : null}
            </div>
        </div>
    )
}

export default Chat;
