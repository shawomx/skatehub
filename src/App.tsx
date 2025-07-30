import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BoardSelector from './components/BoardSelector';
import WheelSelector from './components/WheelSelector';
import SpotFinder from './components/SpotFinder';
import Guides from './components/Guides';
import Community from './components/Community';

function App() {
  const [activeSection, setActiveSection] = useState('boards');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'boards':
        return <BoardSelector />;
      case 'wheels':
        return <WheelSelector />;
      case 'spots':
        return <SpotFinder />;
      case 'guides':
        return <Guides />;
      case 'community':
        return <Community />;
      default:
        return <BoardSelector />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <h3 className="text-xl font-bold">SkateHub</h3>
              </div>
              <p className="text-gray-400">
                Ta plateforme ultime pour tout ce qui concerne le skateboard.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Équipement</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Planches</a></li>
                <li><a href="#" className="hover:text-white">Roues</a></li>
                <li><a href="#" className="hover:text-white">Trucks</a></li>
                <li><a href="#" className="hover:text-white">Roulements</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Communauté</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Spots</a></li>
                <li><a href="#" className="hover:text-white">Événements</a></li>
                <li><a href="#" className="hover:text-white">Forum</a></li>
                <li><a href="#" className="hover:text-white">Guides</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">CGU</a></li>
                <li><a href="#" className="hover:text-white">Confidentialité</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SkateHub. Tous droits réservés. Made with ❤️ pour la communauté skate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
