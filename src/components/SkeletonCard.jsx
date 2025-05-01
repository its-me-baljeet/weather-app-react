import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-5 animate-pulse text-white">
      {/* Left Section */}
      <div className="w-full md:w-[70%] flex flex-col gap-5">
        {/* Form Skeleton */}
        <div className="w-full h-14 bg-gray-700 rounded-lg" />

        {/* Card Skeleton */}
        <div className="flex justify-between items-center p-5 bg-gray-700 rounded-xl shadow-md">
          <div className="space-y-3 w-1/2">
            <div className="h-6 bg-gray-600 rounded w-3/4"></div>
            <div className="h-10 bg-gray-600 rounded w-1/2"></div>
          </div>
          <div className="h-20 w-20 bg-gray-600 rounded-full"></div>
        </div>

        {/* HrsForecastCard Skeleton */}
        <div className="flex flex-wrap gap-4 justify-center">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-24 p-4 bg-gray-700 rounded-xl shadow"
            >
              <div className="h-4 w-16 bg-gray-600 rounded mb-2"></div>
              <div className="h-10 w-10 bg-gray-600 rounded-full mb-2"></div>
              <div className="h-4 w-12 bg-gray-600 rounded mb-1"></div>
              <div className="h-3 w-20 bg-gray-600 rounded"></div>
            </div>
          ))}
        </div>

        {/* Description Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5 bg-gray-700 rounded-xl shadow-md">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="space-y-2 text-center">
              <div className="h-4 w-20 bg-gray-600 rounded mx-auto"></div>
              <div className="h-5 w-16 bg-gray-600 rounded mx-auto"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[30%] flex flex-col gap-5">
        {/* DaysForecastCard Skeleton */}
        <div className="flex flex-col gap-4 bg-gray-700 rounded-xl p-4 shadow-md">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center gap-2"
            >
              <div className="h-4 w-16 bg-gray-600 rounded"></div>
              <div className="h-8 w-8 bg-gray-600 rounded-full"></div>
              <div className="h-4 w-10 bg-gray-600 rounded"></div>
            </div>
          ))}
        </div>

        {/* SunRiseSet Skeleton */}
        <div className="flex flex-wrap gap-4 justify-center bg-gray-700 rounded-xl p-4 shadow-md">
          {["Sunrise", "Sunset"].map((label, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center w-24 gap-2"
            >
              <div className="h-10 w-10 bg-gray-600 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-600 rounded"></div>
              <div className="h-3 w-14 bg-gray-600 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
