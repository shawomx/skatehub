import React, { useState } from 'react';
import { MapPin, Star, Clock, Users } from 'lucide-react';

interface Spot {
  id: string;
  name: string;
  location: string;
  type: string;
  level: string;
  rating: number;
  features: string[];
  openTime: string;
  image: string;
  distance: string;
}

export default function SpotFinder() {
  const [selectedType, setSelectedType] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const spots: Spot[] = [
    {
      id: '1',
      name: 'Venice Beach Skatepark',
      location: 'Los Angeles, USA',
      type: 'skatepark',
      level: 'all',
      rating: 4.8,
      features: ['Bowl', 'Street course', 'Vue sur l\'océan'],
      openTime: '8h - 21h',
      image: 'https://images.unsplash.com/photo-1583512603706-2e5e7b17f2ad?auto=compress&cs=tinysrgb&w=600',
      distance: '—'
    },
    {
      id: '2',
      name: 'Burnside Skatepark',
      location: 'Portland, USA',
      type: 'bowl',
      level: 'intermediate',
      rating: 4.7,
      features: ['DIY park', 'Coping métal', 'Abrité'],
      openTime: '8h - 22h',
      image: 'https://images.unsplash.com/photo-1502790671504-542ad42d5189?auto=compress&cs=tinysrgb&w=600',
      distance: '—'
    },
    {
      id: '3',
      name: 'MACBA',
      location: 'Barcelone, Espagne',
      type: 'street',
      level: 'advanced',
      rating: 4.6,
      features: ['Ledges', 'Plaza mythique', 'Spot urbain'],
      openTime: '24h/24',
      image: 'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?auto=compress&cs=tinysrgb&w=600',
      distance: '—'
    }
  ];

  const filteredSpots = spots.filter(spot => {
    return (
      (!selectedType || spot.type === selectedType) &&
      (!selectedLevel || spot.level === selectedLevel || spot.level === 'all')
    );
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'skatepark': return '🏟️';
      case 'street': return '🏙️';
      case 'bowl': return '🏗️';
      default: return '📍';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Découvre les meilleurs spots</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Trouve les spots de skate près de chez toi, avec infos pratiques et avis de la communauté
        </p>
      </div>

      {/* Carte fictive */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="relative z-10 text-center">
          <MapPin className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Localise-toi pour des résultats précis</h3>
          <p className="text-gray-600 mb-6">Active ta géolocalisation pour voir les distances exactes</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Activer la géolocalisation
          </button>
        </div>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Filtre tes spots</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Type de spot</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Tous les types</option>
              <option value="skatepark">Skatepark</option>
              <option value="street">Street</option>
              <option value="bowl">Bowl</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Niveau requis</label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Tous les niveaux</option>
              <option value="beginner">Débutant</option>
              <option value="intermediate">Intermédiaire</option>
              <option value="advanced">Avancé</option>
            </select>
          </div>
        </div>
      </div>

      {/* Liste des spots */}
      <div className="space-y-6">
        {filteredSpots.map((spot) => (
          <div
            key={spot.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fadeInUp"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={spot.image} 
                  alt={spot.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-2xl">{getTypeIcon(spot.type)}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{spot.name}</h3>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{spot.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{spot.rating}</span>
                      </div>
                      <span className="text-orange-500 font-medium">{spot.distance}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Ouvert {spot.openTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 capitalize">Niveau: {spot.level === 'all' ? 'Tous niveaux' : spot.level}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-4">
                  {spot.features.map((feature, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-600">
                      <MapPin className="h-4 w-4" />
                      <span>Itinéraire</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>Avis (23)</span>
                    </button>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                    Voir les détails
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}