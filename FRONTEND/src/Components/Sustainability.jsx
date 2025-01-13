import React from 'react';

const Sustainability = () => {
  const initiatives = [
    { title: 'Energy Conservation', description: 'Using renewable energy sources and efficient practices.', img: '#' },
    { title: 'Water Management', description: 'Recycling and optimizing water usage.', img: '#' },
    { title: 'Community Support', description: 'Empowering local communities through education and employment.', img: '#' },
  ];

  return (
    <div className="p-6 bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Sustainability</h1>
        <p className="text-lg text-gray-600">Our commitment to a sustainable future.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {initiatives.map((item) => (
          <div key={item.title} className="border rounded-lg p-6 bg-white shadow">
            <img src={item.img} alt={item.title} className="mb-4 w-full h-32 object-cover rounded" />
            <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
            <p className="mt-4 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sustainability;
