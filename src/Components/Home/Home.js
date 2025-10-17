import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/"); 
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans transition-colors duration-500">
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              ProMed Health Plus
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition font-semibold text-sm shadow-md hover:shadow-lg"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-md p-5 mb-5 border border-teal-100">
          <h2 className="text-2xl font-bold mb-2 text-teal-700">
            Welcome back, {currentUser?.fullName}! 🎉
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Transforming wound care for independent healthcare providers
          </p>

          <div className="bg-teal-50 rounded-lg p-3 border border-teal-100">
            <h3 className="font-bold text-sm mb-2 text-teal-700">
              Your Profile
            </h3>
            <div className="space-y-1">
              <p className="text-sm">
                <span className="font-semibold text-gray-700">Name:</span>{" "}
                {currentUser?.fullName}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-gray-700">Email:</span>{" "}
                {currentUser?.email}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 mb-5 border border-gray-200">
          <h3 className="text-xl font-bold text-teal-700 mb-3">
            About ProMed Health Plus
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            At{" "}
            <span className="font-semibold text-teal-600">
              ProMed Health Plus
            </span>
            , we are dedicated to transforming wound care by equipping private
            practices with the tools and support they need to thrive. With over
            $80\%$ of our services dedicated to empowering independent providers,
            we guide you from initial setup through seamless reimbursement—with
            expert support at every step.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Our streamlined processes, selective partnerships, and unwavering
            commitment to excellence ensure superior patient outcomes and
            practice success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-5">
          <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition border-t-4 border-teal-500">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-teal-700 mb-1">Educate</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              We aim to provide advanced support by understanding the process
              and outlining the direction for optimal wound care solutions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition border-t-4 border-teal-600">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-teal-700 mb-1">Support</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Our dedicated clinical specialists offer expert support to assist
              with product selection, application techniques, and addressing
              specific patient needs.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition border-t-4 border-teal-700">
            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-teal-700 mb-1">Commitment</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              We are committed to making a difference in underserved communities
              by providing access to high-quality wound care products and
              education.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl shadow-md p-5 mb-5 text-white">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Join Our Team!</h3>
              <p className="text-sm text-teal-50 leading-relaxed mb-3">
                ProMed Health Plus, a dynamic and innovative medical sales
                startup, is seeking two ambitious and enthusiastic interns to
                join our team. This is a unique opportunity to grow with our
                company, build a robust professional network, and directly
                contribute to our mission of providing cutting-edge wound care
                products to healthcare professionals.
              </p>
              <button 
                className="bg-white text-teal-700 px-4 py-2 rounded-lg font-bold text-sm hover:bg-teal-50 transition shadow-md hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition border-t-4 border-teal-500">
            <p className="text-3xl font-bold text-teal-700 mb-1">80%+</p>
            <p className="text-sm text-gray-600 font-medium">
              Private Practices
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition border-t-4 border-teal-500">
            <p className="text-3xl font-bold text-teal-700 mb-1">Expert</p>
            <p className="text-sm text-gray-600 font-medium">Support Team</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition border-t-4 border-teal-500">
            <p className="text-3xl font-bold text-teal-700 mb-1">98%</p>
            <p className="text-sm text-gray-600 font-medium">Success Rate</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition border-t-4 border-teal-500">
            <p className="text-3xl font-bold text-teal-700 mb-1">24/7</p>
            <p className="text-sm text-gray-600 font-medium">
              Clinical Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
