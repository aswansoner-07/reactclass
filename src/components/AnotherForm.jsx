import React,{useState} from 'react';
import {toast,ToastContainer} from 'react-toastify';

const AnotherForm = () => {

    const [formData, setFormData] = useState({name: '', email: '', message: ''});

    const handleChange = (e) => {
       
      const {name, value} = e.target;

      setFormData((prevData) => (
        {
        ...prevData,
        [name]: value,
      }));
    }

    const handleSubmit = (e) => {   
        e.preventDefault();
        // Handle form submission logic here, e.g., send data to an API or server
        console.log('Form submitted by another way:', formData);
        // Reset form data after submission
        toast.success('Form submitted successfully!');
        setFormData({name: '', email: '', message: ''});
        toast.error('Form submitted with error!',{});
    }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100 p-4">
        <ToastContainer/>
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            id='name'
            name='name'
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            className="p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnotherForm;
