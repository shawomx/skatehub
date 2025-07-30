import React, { useState } from 'react';
import { Zap, Shield, Gauge } from 'lucide-react';

interface Wheel {
  id: string;
  name: string;
  size: string;
  hardness: string;
  use: string;
  price: string;
  features: string[];
  color: string;
}

export default function WheelSelector() {
  const [selectedUse, setSelectedUse] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const wheels: Wheel[] = [
    {
      id: '1',
      name: 'Street Fighter 52mm',
      size: '52mm',
      hardness: '99A',
      use: 'street',
      price: '35€',
      features: ['Grip optimal', 'Résistance max', 'Pop parfait'],
      color: 'bg-red-500'
    },
    {
      id: '2',
      name: 'Cruiser Smooth 60mm',
      size: '60mm',
      hardness: '78A',
      use: 'cruising',
      price: '42€',
      features: ['Roulement fluide', 'Confort maximum', 'Absorption chocs'],
      color: 'bg-blue-500'
    },
    {
      id: '3',
      name: 'Park Master 54mm',
      size: '54mm',
      hardness: '95A',
      use: 'park',
      price: '38€',
      features: ['Polyvalent', 'Bonne vitesse', 'Contrôle précis'],
      color: 'bg-green-500'
    }
  ];

  const filteredWheels = wheels.filter(wheel => {
    return (
      (!selectedUse || wheel.use === selectedUse) &&
      (!selectedSize || wheel.size === selectedSize)
    );
  });

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Choisis tes roues parfaites</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          La taille et la dureté de tes roues déterminent ton style de ride
        </p>
      </div>

      {/* Guide rapide */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Guide rapide des roues</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Street (50-53mm)</h4>
            <p className="text-gray-600 text-sm">Roues dures (99-101A) pour tricks et gaps</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Cruising (55-65mm)</h4>
            <p className="text-gray-600 text-sm">Roues molles (78-87A) pour le transport</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gauge className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Park (54-58mm)</h4>
            <p className="text-gray-600 text-sm">Roues moyennes (95-99A) polyvalentes</p>
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Trouve tes roues</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Utilisation principale</label>
            <select
              value={selectedUse}
              onChange={(e) => setSelectedUse(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Toutes les utilisations</option>
              <option value="street">Street/Tricks</option>
              <option value="cruising">Cruising/Transport</option>
              <option value="park">Park/Bowl</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Taille préférée</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Toutes les tailles</option>
              <option value="52mm">52mm</option>
              <option value="54mm">54mm</option>
              <option value="56mm">56mm</option>
              <option value="60mm">60mm</option>
            </select>
          </div>
        </div>
      </div>

      {/* Résultats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWheels.map((wheel) => (
          <div key={wheel.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className={`h-32 ${wheel.color} flex items-center justify-center`}>
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg"></div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{wheel.name}</h3>
              
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <span>Taille: {wheel.size}</span>
                <span>Dureté: {wheel.hardness}</span>
              </div>

              <div className="space-y-2 mb-4">
                {wheel.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-500">{wheel.price}</span>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                  Choisir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}