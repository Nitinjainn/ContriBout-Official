import { FaBolt, FaShareAlt, FaGlobe } from "react-icons/fa";

export default function Example() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Fund, Fast As <span className="italic text-green-600">Flash</span>
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Fundraise at the speed of thought! Elevate your cause in just a minute with our lightning-fast fundraising platform.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="flex flex-col items-center rounded-lg bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaBolt className="text-green-500 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Ignite Impact</h3>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Spark joy by sharing your cause and the positive impact it brings. Clearly express how contributions will make a meaningful difference.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaShareAlt className="text-green-500 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Spread The Word</h3>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Leverage the speed of social media and online networks. Share your fundraising campaign swiftly across various platforms.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-gray-50 p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <FaGlobe className="text-green-500 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Connect Globally</h3>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Build a strong social network around your cause. Encourage supporters to share the campaign within their local communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
