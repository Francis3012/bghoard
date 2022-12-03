import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Game } from '@bghoard/api-interface';


const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/game')
      .then(r => r.json())
      .then(setGames);
  }, [])

  return (
    <StyledApp>
      <h1>Board Game Hoard: Review</h1>
      <div>{JSON.stringify(games)}</div>
    </StyledApp>
  );
}

export default App;
