import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm('service_sxkvb65', 'template_bcsona5', form.current, {
                publicKey: 'IBc8vS--T4kFu2wo2',
            })
            .then(
                () => {
                    setSent(true);
                    setLoading(false);
                    alert("Message Sent, Someone will be with you shortly.")
                },
                (error) => {
                    setLoading(false);
                    alert("Message Cannot be sent. Contact the Admin.")
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id='Contact' className="min-h-screen flex items-center justify-center bg-gray-100">
            {loading ? (
                <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-200"></div>
                </div>
            ) : (
                <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className='text-2xl text-center '>Contact Us</h1>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_name">
                        Name
                    </label>
                    <input className="bg-blue-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user_name" type="text" name="user_name" placeholder="Name" />

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="user_email">
                        Email
                    </label>
                    <input className="bg-blue-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="user_email" type="email" name="user_email" placeholder="Email" />

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea className="bg-blue-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" placeholder="Message"></textarea>

                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Send" />
                </form>
            )}
        </div>
    );
};

export default ContactForm;
