import React from 'react';

const Card = ({ room }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
      <img className="w-full h-48 object-cover" src={room.image} alt={room.title} />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-green-600">{room.title}</h2>
        <ul className="mt-4 list-disc pl-5">
          {room.description.map((desc, index) => (
            <li key={index} className="text-gray-700">{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;