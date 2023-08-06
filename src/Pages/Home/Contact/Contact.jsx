const Contact = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-16 bg-[#14212B] px-4 py-12 md:p-16 shadow-md rounded-lg my-20">
        <h1 className='text-white text-[23px] md:text[30px] font-bold' style={{fontFamily: 'Amiri, serif'}}>Have any questions?</h1>
        <p className='text-white text-[14px] mb-10' style={{fontFamily: 'Nunito Sans, sans-serif'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="md:grid grid-cols-2 gap-4 mb-4">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 placeholder-gray-400 bg-[#22303E] rounded-lg text-white focus:placeholder-transparent focus:ring focus:border-[#22303E]"
            placeholder="Your Name"
          />
        </div>
        <div className='mt-4 md:mt-0'>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 placeholder-gray-400 bg-[#22303E] rounded-lg text-white focus:placeholder-transparent focus:ring focus:border-[#22303E]"
            placeholder="Your Email"
          />
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          id="website"
          name="website"
          className="w-full px-3 py-2 placeholder-gray-400 bg-[#22303E] rounded-lg text-white focus:placeholder-transparent focus:ring focus:border-[#22303E]"
          placeholder="Your Website"
        />
      </div>
      <div className="mb-4">
        <textarea
          id="message"
          name="message"
          rows="4"
          className="w-full px-3 py-2 placeholder-gray-400 bg-[#22303E] rounded-lg text-white focus:placeholder-transparent focus:ring focus:border-[#22303E]"
          placeholder="Your Message"
        />
      </div>
      <div className="flex justify-start">
        <button
          type="submit"
          className="uppercase text-[0.9rem] font-bold bg-[#FF4A17] text-white px-8 py-5 rounded-sm hover:bg-orange-700"
        >
          Get In touch
        </button>
      </div>
    </div>
  );
};

export default Contact;
