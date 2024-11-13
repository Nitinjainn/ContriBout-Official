import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { Button, Message } from 'semantic-ui-react';

const DonationPage = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState('');
  const [donationAmountETH, setDonationAmountETH] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMess, setErrorMess] = useState('');

  useEffect(() => {
    const initializeWeb3 = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);
          const accounts = await web3Instance.eth.getAccounts();
          setAccount(accounts[0]);
        } catch (error) {
          console.error("User denied account access:", error);
        }
      } else {
        alert('Please install MetaMask to use blockchain donation.');
      }
    };
    initializeWeb3();
  }, []);

  const verifyMetaMaskAccount = () => {
    if (web3 && account) {
      setIsVerified(true);
      alert('MetaMask account verified.');
    } else {
      alert('Please connect to MetaMask first.');
    }
  };

  const handleETHDonation = async () => {
    if (web3 && account && isVerified) {
      const weiAmount = web3.utils.toWei(donationAmountETH, 'ether');
      setLoading(true);
      try {
        await web3.eth.sendTransaction({
          from: account,
          to: '0x9E268c57200DF4B9b3Ae84882Ed4e347F5441625', // Replace with your receiver address
          value: weiAmount,
        });
        setConfirmationMessage(`Thank you for donating ${donationAmountETH} ETH!`);
        setShowConfirmationModal(true);
      } catch (error) {
        console.error("Transaction failed:", error);
        setErrorMess('Transaction failed. Please check your input and try again.');
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please verify your MetaMask account before proceeding.');
    }
  };

  const closeModal = () => setShowConfirmationModal(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-green-100 to-white text-gray-800 p-10">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800">InvestCycle</h1>
        <p className="text-gray-600 mb-5">
          A platform where travelers can pool resources monthly to help each other achieve travel goals through shared contributions and support.
        </p>

        {/* ETH Donation Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contribute in ETH</h2>
          <p>Connected Account: {account || 'Not connected'}</p>
          <input
            type="text"
            placeholder="Enter amount in ETH"
            value={donationAmountETH}
            onChange={(e) => setDonationAmountETH(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <Button onClick={verifyMetaMaskAccount} className="w-full p-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors mb-4">
            Verify MetaMask Account
          </Button>
          <Button loading={loading} onClick={handleETHDonation} className="w-full p-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition-colors">
            Contribute in ETH
          </Button>
          {errorMess && <Message negative>{errorMess}</Message>}
        </div>

        {/* Confirmation Modal */}
        {showConfirmationModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-5">
            <div className="bg-white p-6 rounded-lg text-center max-w-sm w-full">
              <h2 className="text-2xl font-semibold text-gray-800">Thank You!</h2>
              <p className="text-green-600 my-4">{confirmationMessage}</p>
              <button onClick={closeModal} className="bg-green-700 text-white py-2 px-6 rounded mt-4">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationPage;
