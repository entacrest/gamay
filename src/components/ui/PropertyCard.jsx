import { useState } from "react";
import { MapPin, Tag, ArrowRight } from "lucide-react";

const statusColor = {
  Available: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Limited: "bg-gold-50 text-gold-700 border-gold-200",
  Sold: "bg-gray-100 text-gray-500 border-gray-200",
};

export default function PropertyCard({ property }) {
  const {
    name,
    location,
    category,
    status,
    img,
    sizes,
    description,
    features,
    landmarks,
    documents,
    paymentPlan,
  } = property;

  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="bg-white border border-gray-100 rounded-sm overflow-hidden card-hover group">
      {/* Image */}
      <div className="h-52 relative overflow-hidden">
        <img
          src={img}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/20" />

        <span
          className={`absolute top-4 right-4 text-xs font-600 px-3 py-1 rounded-sm border ${
            statusColor[status]
          }`}
        >
          {status}
        </span>

        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-2xl font-display font-600">
            {selectedSize.price}
          </p>
          <p className="text-sm opacity-90">
            {selectedSize.size}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <Tag size={12} className="text-gold-500" />
          <span className="text-xs font-600 text-gold-500 uppercase tracking-wide">
            {category}
          </span>
        </div>

        <h3 className="font-display text-xl font-600 text-primary-800 mb-2">
          {name}
        </h3>

        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
          <MapPin size={13} />
          <span>{location}</span>
        </div>

        {/* Land Sizes */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Select Land Size
          </label>

          <select
            value={selectedSize.size}
            onChange={(e) =>
              setSelectedSize(
                sizes.find((s) => s.size === e.target.value)
              )
            }
            className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm"
          >
            {sizes.map((item) => (
              <option key={item.size} value={item.size}>
                {item.size} - {item.price}
              </option>
            ))}
          </select>
        </div>

        {/* Short Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="text-xs bg-gray-100 px-2 py-1 rounded"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">
            Nearby Landmarks
          </h4>

          <ul className="space-y-1">
            {landmarks?.slice(0, 5).map((landmark) => (
              <li
                key={landmark}
                className="text-xs text-gray-600 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                {landmark}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-5">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">
            Documents
          </h4>

          <div className="flex flex-wrap gap-2">
            {documents?.slice(0, 5).map((doc) => (
              <span
                key={doc}
                className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded"
              >
                {doc}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-primary-700 mb-2">
            Payment Plan
          </h4>

          <div className="flex flex-wrap gap-2">
            {paymentPlan?.slice(0, 3).map((plan) => (
              <span
                key={plan}
                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded"
              >
                {plan}
              </span>
            ))}
          </div>
        </div>

        {/* <button className="inline-flex items-center gap-2 text-sm font-600 text-primary-700 hover:gap-3 transition-all uppercase tracking-wide">
          View Details
          <ArrowRight size={14} />
        </button> */}
      </div>
    </div>
  );
}