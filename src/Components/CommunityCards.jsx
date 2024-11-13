import React from 'react';
import Navbar from './Navbar'

const CommunityCard = ({ title, description, peopleJoined, imageSrc }) => {
  return (
    <div className="bg-teal-100 rounded-lg shadow-lg w-80 max-h-[400px] p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="overflow-hidden rounded-lg">
        <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-lg" />
      </div>
      <h4 className="text-teal-700 text-xl font-semibold mt-4">{title}</h4>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
      <div className="flex justify-between items-center mt-6">
        <span className="text-gray-600 text-sm">{peopleJoined} people joined</span>
        <button className="bg-teal-700 text-white py-2 px-5 rounded-md hover:bg-teal-800 transition-all">
          Join Community
        </button>
      </div>
    </div>
  );
};

const CommunityCards = () => {
  const communityData = [
    { title: 'Trip to Manali', description: 'Join the community for a trip to the mountains.', peopleJoined: '250+', imageSrc: 'https://www.justahotels.com/wp-content/uploads/2023/07/Manali-Travel-Guide.jpg' },
    { title: 'Explore Goa', description: 'A community adventure to the beaches of Goa.', peopleJoined: '300+', imageSrc: 'https://wemusttravel.in/wp-content/uploads/2019/06/Goa-sunset-4.jpg' },
    { title: 'Ladakh Journey', description: 'Experience the stunning landscapes of Ladakh.', peopleJoined: '200+', imageSrc: 'https://www.lehladakhindia.com/wp-content/uploads/2024/07/ladakh-by-road-22.jpeg' },
    { title: 'Rajasthan Safari', description: 'Discover the royal heritage of Rajasthan.', peopleJoined: '150+', imageSrc: 'https://lh7-us.googleusercontent.com/eGaRpuYaooIGNqSeodNjWK_n_Qjbnl9MLgAt97k7KZPyB2-EYlls1Pv7_24oogSSK2bIVY1mI9DwEUL4ahfWr7KDlqqNVkWI4MmI9T36-XgykdJsDn2abbcJ-aAghn8S1GLSr52HrRmuDNEq-yn8lQA' },
    { title: 'Backpacking in Kerala', description: 'Join us for an exploration of Kerala’s beauty.', peopleJoined: '180+', imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCkzs9WIDTAahMcFBCBTuO9fK5N8uYiFoCw&s' },
    { title: 'HongKong DisneyLand', description: 'Join us for an exploration of HonKong.', peopleJoined: '180+', imageSrc: 'https://www.flamingotravels.co.in/blog/wp-content/uploads/2023/08/Disneyland-Hongkong.png' }
  ];

  return (
    <>
      <Navbar/>
      <div>
        <div className="flex justify-center items-center py-12">
          <h1 className="text-3xl font-extrabold text-gray-800">Search for Communities</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-8 px-10 py-6">
          {communityData.map((community, index) => (
            <CommunityCard
              key={index}
              title={community.title}
              description={community.description}
              peopleJoined={community.peopleJoined}
              imageSrc={community.imageSrc}
            />
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center py-6">
          <button className="bg-teal-700 text-white py-2 px-6 rounded-md hover:bg-teal-800 transition-all">
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default CommunityCards;
