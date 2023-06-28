'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}



const ContactForm: React.FC = () => {
  const initialFormData: FormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [message, setMessage] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact-asadullah', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(1);
        setFormData(initialFormData);
      } else {
        setMessage(2);
      }
    } catch (error) {
      console.error('Error occurred during form submission:', error);
    }
  };

  return (
    <form className='max-w-[500px] mx-[auto] px-4 pb-12 pt-10 bg-cd1 rounded-lg border-[1px] border-[#707070]' onSubmit={handleSubmit}>
      <p className={`block w-full rounded-md text-xs pl-2 font-semibold  ${message==2 && 'text-[#ff0000]'} ${message==0 && '[display:none]'}`}>{message==2 && "Form submission failed."}{message==1 && "Form submitted successfully!"}</p>
      <div>
        <label className='block w-full rounded-md text-xs pl-2 pt-8 font-semibold' htmlFor="name">Name</label>
        <input className='block w-full rounded-md mb-4 px-2 mt-1 h-10 bg-cd2'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className='block w-full rounded-md text-xs pl-2 font-semibold' htmlFor="email">Email</label>
        <input className='block w-full rounded-md mb-4 px-2 mt-1 h-10 bg-cd2'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className='block w-full rounded-md text-xs pl-2 font-semibold' htmlFor="phone">Phone <span className='text-cb1 font-light'>(optional)</span></label>
        <input className='block w-full rounded-md mb-4 px-2 mt-1 h-10 bg-cd2'
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className='block w-full rounded-md text-xs pl-2 font-semibold' htmlFor="message">Message</label>
        <textarea className='block w-full rounded-md mb-4 px-2 mt-1 h-20 bg-cd2'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button className='block w-full rounded-full text-sm font-semibold bg-cb0 h-10' type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
