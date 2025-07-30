import React from 'react';
import { Users, MessageCircle, Calendar, Trophy, Heart, Share2 } from 'lucide-react';

interface Post {
  id: string;
  author: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timeAgo: string;
  category: string;
}

interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  participants: number;
  type: string;
}

export default function Community() {
  const posts: Post[] = [
    {
      id: '1',
      author: 'SkaterPro92',
      avatar: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'Enfin réussi mon premier kickflip après 3 mois d\'entraînement ! 🔥',
      image: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 24,
      comments: 8,
      timeAgo: '2h',
      category: 'Progression'
    },
    {
      id: '2',
      author: 'CruzGirl',
      avatar: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'Quelqu\'un connaît un bon spot pour cruiser tranquille vers Belleville ?',
      likes: 12,
      comments: 15,
      timeAgo: '4h',
      category: 'Spots'
    },
    {
      id: '3',
      author: 'BowlMaster',
      avatar: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=100',
      content: 'Session épique au bowl de Bercy aujourd\'hui ! Qui était là ?',
      image: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=600',
      likes: 35,
      comments: 12,
      timeAgo: '6h',
      category: 'Session'
    }
  ];

  const events: Event[] = [
    {
      id: '1',
      name: 'Contest Street République',
      date: '15 Mars 2025',
      location: 'Skatepark République',
      participants: 45,
      type: 'Compétition'
    },
    {
      id: '2',
      name: 'Session Bowl du Dimanche',
      date: '17 Mars 2025',
      location: 'Bowl de Bercy',
      participants: 23,
      type: 'Session'
    },
    {
      id: '3',
      name: 'Initiation Skateboard',
      date: '20 Mars 2025',
      location: 'Trocadéro',
      participants: 18,
      type: 'Cours'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Communauté SkateHub</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connecte-toi avec d'autres skaters, partage tes sessions et participe aux événements
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Feed principal */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">Tu</span>
              </div>
              <div className="flex-1">
                <textarea
                  placeholder="Partage ta session, tes tricks, tes questions..."
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  rows={3}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-500 hover:text-orange-500">
                  <Calendar className="h-5 w-5" />
                  <span>Événement</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 hover:text-orange-500">
                  <Users className="h-5 w-5" />
                  <span>Spot</span>
                </button>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200">
                Publier
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden animate-fadeInUp"
            >
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src={post.avatar} 
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-bold text-gray-900">{post.author}</h4>
                      <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">{post.timeAgo}</p>
                  </div>
                </div>
                
                <p className="text-gray-800 mb-4">{post.content}</p>
                
                {post.image && (
                  <img 
                    src={post.image} 
                    alt="Post"
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                )}
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors duration-200">
                      <Heart className="h-5 w-5" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors duration-200">
                      <MessageCircle className="h-5 w-5" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors duration-200">
                      <Share2 className="h-5 w-5" />
                      <span>Partager</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Événements */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Calendar className="h-6 w-6 text-orange-500" />
              <h3 className="text-xl font-bold text-gray-900">Événements à venir</h3>
            </div>
            
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors duration-200 animate-fadeInUp"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                      {event.type}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{event.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                  <p className="text-sm text-gray-600 mb-3">{event.location}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{event.participants} participants</span>
                    </div>
                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                      Rejoindre
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats communauté */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Communauté</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">Membres actifs</span>
                </div>
                <span className="font-bold text-orange-500">1,247</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">Événements ce mois</span>
                </div>
                <span className="font-bold text-orange-500">18</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">Tricks partagés</span>
                </div>
                <span className="font-bold text-orange-500">156</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}