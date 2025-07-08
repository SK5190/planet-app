import  { useState } from 'react';
import { planets } from './data/planets';
import PlanetDetails from './Components/PlanetDetails';
import StatCard from './Components/StatCard';

const planetNames = planets.map((planet) => planet.name);

type ViewType = 'overview' | 'structure' | 'geology';

const App = () => {
  const [currentPlanetIdx, setCurrentPlanetIdx] = useState(0);
  const [view, setView] = useState<ViewType>('overview');
  const currentPlanet = planets[currentPlanetIdx];

  return (
    <div className='bg-[#070724] min-h-screen w-screen bg-[url("/src/assets/background-stars.svg")] bg-cover bg-center bg-no-repeat'>
      <nav className='flex justify-between px-10 pt-4 pb-4 items-center'>
        <section>
          <h1 className='font-[Antonio] text-white text-3xl'>The Planets</h1>
        </section>
        <section className='flex gap-8'>
          {planetNames.map((name, idx) => (
            <button
              key={name}
              onClick={() => {
                setCurrentPlanetIdx(idx);
                setView('overview'); // Reset view to overview when switching planets
              }}
              className={`text-sm transition-colors duration-200 ${
                idx === currentPlanetIdx ? 'text-white font-bold ' : 'text-white/70 hover:text-white'
              }`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {name.toUpperCase()}
            </button>
          ))}
        </section>
      </nav>
      <hr className='border-white w-[96%] mx-auto ' />
      <PlanetDetails
        name={currentPlanet.name}
        description={currentPlanet.description}
        image={currentPlanet.images[view]}
        source={currentPlanet.source}
        onOverview={() => setView('overview')}
        onStructure={() => setView('structure')}
        onGeology={() => setView('geology')}
      />
      <div className='flex justify-between items-center px-10 gap-9 py-9'>
        {currentPlanet.stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
    </div>
  );
};

export default App;