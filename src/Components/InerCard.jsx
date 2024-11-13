import { useState } from 'react';

const CommunityChat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');

  const sendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        text: messageInput.trim(),
        time: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessageInput('');
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen py-8 px-4">
      {/* Chat Section */}
      <div className="w-full md:w-[70vw] p-6 bg-white rounded-3xl shadow-md">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex items-center justify-start bg-blue-500 text-white p-4 rounded-t-3xl shadow-md">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WdhdzVmMpbLBtUoewasFi-1BMvFDZ0tkQA&s"
              alt="User"
              className="w-14 h-14 rounded-full border-4 border-white shadow-md mr-4"
            />
            <div className="font-semibold text-xl">
              <p>Community Chat</p>
            </div>
          </div>

          {/* Message Container */}
          <div className="bg-white border-b border-gray-300 rounded-b-3xl p-4 max-h-[500px] overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className="flex justify-end">
                <div className="bg-blue-100 text-gray-800 rounded-lg p-4 shadow-md w-max max-w-[80%]">
                  <p className="text-lg">{msg.text}</p>
                  <span className="block text-gray-500 text-sm mt-2">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Input and Send Button */}
          <div className="flex items-center border-t border-gray-300 p-4 bg-gray-50 rounded-b-3xl mt-4">
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Write a message..."
              className="flex-1 rounded-xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
            />
            <button
              onClick={sendMessage}
              className="text-2xl text-blue-600 ml-4"
            >
              <i className="bi bi-send"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-[30vw] p-8 bg-white rounded-3xl shadow-md mx-4 mt-4 md:mt-0">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Trip Details</h2>
        <h5 className="text-xl text-gray-700 mb-2">Trip to Manali</h5>
        <p className="text-gray-600">No. of Places: 2</p>
        <ul className="text-gray-600 list-disc pl-6 mb-4">
          <li>Rohtang Pass</li>
          <li>Solang Valley</li>
        </ul>
        <p className="text-gray-600">Total Price: 5 DOJ</p>
        <button className="bg-teal-500 text-white py-3 px-8 rounded-lg mt-6 w-full">
          <a href="/DonationPage">Proceed to Payment</a>
        </button>
      </div>
    </div>
  );
};

export default CommunityChat;
