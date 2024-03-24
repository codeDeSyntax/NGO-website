function Footer() {
  return (
    <footer className="bg-[#2d2122] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full  px-4 py-6 mt-8">
            <div className="container mx-auto text-center">
              <h2 className="text-lg font-semibold mb-2">About Us</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Qui fugiat reprehenderit cum quae est, voluptates voluptatum
                aliquid itaque recusandae excepturi.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p>Email: contact@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold mb-2">Donate Now</h2>
            <p>Your donation can make a difference.</p>
            <a
              href="#"
              className="block mt-4 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-400"
            >
              Donate
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 NGO Donation. All rights reserved.</p>
        </div>
      </div>
      {/* About section */}
    </footer>
  );
}

export default Footer;
