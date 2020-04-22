import React from 'react';

const chatMessages = ["Wpis z chatu 1","Wpis z chatu 2","Wpis z chatu 3"]

function Chat(){
    return <div className="chat">
        <ChatHeader/>
        <ChatMessages chatMessages={chatMessages}/>
        <NewChatMessage/>
    </div>
}
const ChatHeader = () => {
    return <header>
            <h1>Chat prywatny</h1>
        </header>
}
const ChatMessages = ({chatMessages}) => {
    return <div>
        <ul>
            {chatMessages.map(message => <li><ChatMessage key={message} message={message}/></li>)}
        </ul>
    </div>
}
const ChatMessage = ({message}) => {
    return message;
}
const NewChatMessage = () => {
    return <footer>
        <input type="text"/>
        <button>Wyślij</button>
    </footer>
}
// class Chat extends React.Component{
//     render(){
//         return <div className="chat">
//             <header>
//                 <h1>Chat prywatny</h1>
//             </header>
//             <div>
//                 <ul>
//                     <li>Wpis z chatu 1</li>
//                     <li>Wpis z chatu 2</li>
//                     <li>Wpis z chatu 3</li>
//                 </ul>
//             </div>
//             <footer>
//                 <input type="text"/>
//                 <button>Wyślij</button>
//             </footer>
//         </div>
//     }
// }

export default Chat;