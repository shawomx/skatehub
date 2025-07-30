import React, { useState } from 'react';
import { Star, CheckCircle } from 'lucide-react';

interface Board {
  id: string;
  name: string;
  size: string;
  style: string;
  level: string;
  price: string;
  image: string;
  features: string[];
  rating: number;
  url: string;
}

export default function BoardSelector() {
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const boards: Board[] = [
    {
      id: '1',
      name: 'Santa Cruz Screaming Hand',
      size: '8.0"',
      style: 'street',
      level: 'intermediate',
      price: '99€',
      image: 'https://images.unsplash.com/photo-1587049352854-fc88bbf7f735?auto=format&fit=crop&w=800&q=60',
      features: ['7 plis d\'érable', 'Concave moyen', 'Design mythique'],
      rating: 4.8,
      url: 'https://www.santacruzskateboards.com/products/screaming-hand-complete'
    },
    {
      id: '2',
      name: 'Element Section',
      size: '8.25"',
      style: 'street',
      level: 'beginner',
      price: '89€',
      image: 'https://images.unsplash.com/photo-1623176997249-2c720b0e96cb?auto=format&fit=crop&w=800&q=60',
      features: ['Construction Featherlight', 'Grip Element', 'Roulements ABEC-7'],
      rating: 4.6,
      url: 'https://www.elementbrand.com/products/section-complete'
    },
    {
      id: '3',
      name: 'Girl Biebel OG',
      size: '8.5"',
      style: 'vert',
      level: 'advanced',
      price: '120€',
      image: 'https://images.unsplash.com/photo-1527563715129-c73d4bd9a646?auto=format&fit=crop&w=800&q=60',
      features: ['Shape classique Girl', 'Concave profond', 'Nose & tail larges'],
      rating: 4.9,
      url: 'https://crailtap.com/products/girl-biebel-og-8-5-complete'
    }
  ];

  const filteredBoards = boards.filter(board => {
    return (
      (!selectedStyle || board.style === selectedStyle) &&
      (!selectedLevel || board.level === selectedLevel) &&
      (!selectedSize || board.size === selectedSize)
    );
  });

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Trouve ta planche parfaite</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Réponds à quelques questions et découvre la planche qui correspond à ton style et ton niveau
        </p>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Dis-nous en plus sur toi</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Style de skate</label>
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Tous les styles</option>
              <option value="street">Street</option>
              <option value="cruiser">Cruiser</option>
              <option value="vert">Vert/Bowl</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Niveau</label>
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Taille</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="">Toutes les tailles</option>
              <option value="7.75">7.75"</option>
              <option value="8.0">8.0"</option>
              <option value="8.25">8.25"</option>
              <option value="8.5">8.5"</option>
              <option value="8.75">8.75"</option>
            </select>
          </div>
        </div>
      </div>

      {/* Résultats */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBoards.map((board) => (
          <div
            key={board.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fadeInUp"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img 
                src={board.image} 
                alt={board.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{board.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{board.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <span>Taille: {board.size}</span>
                <span className="capitalize">{board.level}</span>
              </div>

              <div className="space-y-2 mb-4">
                {board.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-500">{board.price}</span>
                <a
                  href={board.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  Acheter
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBoards.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Aucune planche ne correspond à tes critères. Essaie de modifier tes filtres !</p>
        </div>
      )}
    </div>
  );
}