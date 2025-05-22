// import React from 'react';
// import Home from './pages/Home';

// function App() {
//   return <Home />;
// }

// export default App;

import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import LoadingThreeDotsJumping from './components/loadingThreeDotsJumping/LoadingThreeDotsJumping';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500); // Simulate load
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <div className="loader-fullscreen">
      <LoadingThreeDotsJumping />
    </div>
  ) : (
    <Home />
  );
}

export default App;
