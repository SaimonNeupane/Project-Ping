import React from 'react';
import './Dashboard.css'; // Import your CSS file for custom styles

const Dashboard = () => {
  return (
    <div className="container">
      <div className="leftSide">
        {/* Header */}
        <div className="header">
          <div className="userimg">
            <img src="images/user.jpg" alt="" className="cover" />
          </div>
          <ul className="nav_icons">
            <li><ion-icon name="scan-circle-outline"></ion-icon></li>
            <li><ion-icon name="chatbox"></ion-icon></li>
            <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
          </ul>
        </div>
        {/* Search Chat */}
        <div className="search_chat">
          <div>
            <input type="text" placeholder="Search or start new chat" />
            <ion-icon name="search-outline"></ion-icon> 
          </div>                
        </div>
        {/* CHAT LIST */}
        <div className="chatlist">
          {[
            { img: 'img1.jpg', name: 'Jhon Doe', time: '10:56', message: 'How are you doing?', unread: false, active: true },
            { img: 'img2.jpg', name: 'Andre', time: '12:34', message: 'I love your youtube videos!', unread: true, count: 1 },
            { img: 'img3.jpg', name: 'Olivia', time: 'Yesterday', message: 'I just subscribed to your channel', unread: true, count: 2 },
            { img: 'img4.jpg', name: 'Parker', time: 'Yesterday', message: 'Hey!', unread: false },
            { img: 'img7.jpg', name: 'Zoey', time: '18/01/2022', message: "I'll get back to you", unread: false },
            { img: 'img8.jpg', name: 'Josh', time: '17/01/2022', message: 'Congratulations', unread: false },
            { img: 'img9.jpg', name: 'Dian', time: '15/01/2022', message: 'Thanks alot', unread: false },
            { img: 'img5.jpg', name: 'Sam', time: 'Yesterday', message: 'Did you finish the project?', unread: false },
            { img: 'img6.jpg', name: 'Junior', time: '18/01/2022', message: 'Nice course', unread: false },
          ].map((chat, index) => (
            <div key={index} className={`block ${chat.unread ? 'unread' : ''} ${chat.active ? 'active' : ''}`}>
              <div className="imgBox">
                <img src={`images/${chat.img}`} className="cover" alt="" />
              </div>
              <div className="details">
                <div className="listHead">
                  <h4>{chat.name}</h4>
                  <p className="time">{chat.time}</p>
                </div>
                <div className="message_p">
                  <p>{chat.message}</p>
                  {chat.unread && <b>{chat.count}</b>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rightSide">
        <div className="header">
          <div className="imgText">
            <div className="userimg">
              <img src="images/img1.jpg" alt="" className="cover" />
            </div>
            <h4>Qazi <br /><span>online</span></h4>
          </div>
          <ul className="nav_icons">
            <li><ion-icon name="search-outline"></ion-icon></li>
            <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
          </ul>
        </div>
        {/* CHAT-BOX */}
        <div className="chatbox">
          {[
            { message: 'Hi', time: '12:18', sender: 'my_msg' },
            { message: 'Hey', time: '12:18', sender: 'friend_msg' },
            { message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', time: '12:15', sender: 'my_msg' },
            { message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', time: '12:15', sender: 'friend_msg' },
          ].map((chat, index) => (
            <div key={index} className={`message ${chat.sender}`}>
              <p>{chat.message} <br /><span>{chat.time}</span></p>
            </div>
          ))}
        </div>
        {/* CHAT INPUT */}
        <div className="chat_input">
          <ion-icon name="happy-outline"></ion-icon>
          <input type="text" placeholder="Type a message" />
          <ion-icon name="mic"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
