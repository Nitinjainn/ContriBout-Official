import { FaCheckCircle } from "react-icons/fa";

const campaigns = [
  {
    id: 1,
    org: 'We Care',
    name: 'GreenFund: Sustain Earth Now',
    imageSrc: 'https://img.freepik.com/free-photo/plant-growing-coins-glass-jar_155003-1174.jpg?w=360',
    imageAlt: 'Environmental campaign for sustainability',
  },
  {
    id: 2,
    org: 'Unicef',
    name: 'SeniorHealth: Support Campaign',
    imageSrc: 'https://www.carehavenhomes.com/wp-content/uploads/2023/07/Care-Homes-4-scaled.jpg',
    imageAlt: 'Healthcare support for senior citizens',
  },
  {
    id: 3,
    org: 'Unity Foundation',
    name: 'DisasterCare: Urgent Support',
    imageSrc: 'https://media.istockphoto.com/id/615481526/photo/rescue-team-evacuating-victim-from-house.jpg?s=612x612&w=0&k=20&c=elkygvQP_fFbxvJ1pbR27TGY2wLvBxigGZ_SPsKe5tQ=',
    imageAlt: 'Disaster relief support campaign',
  },
  // More campaigns...
];

export default function CampaignList() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">Urgent Fundraising!</h2>
        <p className="mt-2 text-lg text-gray-600 text-center">
          Time is of the essence! Join our mission <span className="font-semibold">NOW</span> to make an immediate impact. Every second counts!
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={campaign.imageSrc}
                  alt={campaign.imageAlt}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-blue-500 text-sm" />
                  <span className="text-sm font-semibold text-gray-500">{campaign.org}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-800">{campaign.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
