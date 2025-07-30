import React from 'react';
import { BookOpen, Video, Trophy } from 'lucide-react';

interface Guide {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  duration: string;
  image: string;
  description: string;
  icon: React.ReactNode;
}

export default function Guides() {
  const guides: Guide[] = [
    {
      id: '1',
      title: 'Apprendre l\'Ollie parfait',
      category: 'Tricks de base',
      difficulty: 'Débutant',
      duration: '2 semaines',
      image: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Maîtrise le trick fondamental du skateboard avec notre guide étape par étape',
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: '2',
      title: 'Kickflip en 10 étapes',
      category: 'Tricks intermédiaires',
      difficulty: 'Intermédiaire',
      duration: '1 mois',
      image: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Progression méthodique pour apprendre le kickflip de façon sûre et efficace',
      icon: <Video className="h-6 w-6" />
    },
    {
      id: '3',
      title: 'Guide des transitions',
      category: 'Bowl & Vert',
      difficulty: 'Avancé',
      duration: '3 mois',
      image: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Tout savoir sur le skate en bowl et rampe, du drop-in aux airs',
      icon: <Trophy className="h-6 w-6" />
    }
  ];

  const tips = [
    {
      title: 'Échauffement essentiel',
      content: 'Toujours s\'échauffer 10 minutes avant de skater pour éviter les blessures',
      category: 'Sécurité'
    },
    {
      title: 'Position des pieds',
      content: 'Le pied arrière doit être perpendiculaire à la planche pour un meilleur contrôle',
      category: 'Technique'
    },
    {
      title: 'Entretien des roulements',
      content: 'Nettoie tes roulements tous les mois pour maintenir une glisse optimale',
      category: 'Matériel'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Guides et astuces</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Apprends avec les meilleurs guides et conseils de la communauté skate
        </p>
      </div>

      {/* Guides principaux */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide) => (
          <div
            key={guide.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-fadeInUp"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img 
                src={guide.image} 
                alt={guide.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-500">
                  {guide.icon}
                </div>
                <span className="text-sm text-orange-500 font-medium">{guide.category}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>Difficulté: {guide.difficulty}</span>
                <span>Durée: {guide.duration}</span>
              </div>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition-colors duration-200">
                Commencer le guide
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Astuces rapides */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">💡 Astuces du jour</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm animate-fadeInUp"
            >
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-orange-100 text-orange-500 text-xs font-medium px-3 py-1 rounded-full">
                  {tip.category}
                </span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{tip.title}</h4>
              <p className="text-gray-600 text-sm">{tip.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section vidéos */}
      <div className="bg-black rounded-2xl p-8 text-white">
        <div className="text-center mb-8">
          <Video className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Tutoriels vidéo</h3>
          <p className="text-gray-400">Apprends en regardant les pros en action</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-200 cursor-pointer animate-fadeInUp">
            <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <Video className="h-12 w-12 text-gray-500" />
            </div>
            <h4 className="font-bold mb-2">Les bases du street skating</h4>
            <p className="text-gray-400 text-sm">Découvre les tricks essentiels pour débuter en street</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-200 cursor-pointer animate-fadeInUp">
            <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <Video className="h-12 w-12 text-gray-500" />
            </div>
            <h4 className="font-bold mb-2">Montage de skateboard</h4>
            <p className="text-gray-400 text-sm">Apprends à monter ton skate comme un pro</p>
          </div>
        </div>
      </div>
    </div>
  );
}