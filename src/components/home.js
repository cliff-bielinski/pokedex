import { useState } from 'react';

import Result from '../components/result';
import Search from '../components/search';

function Home() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  return (
    <div>
      <Search query={query} setQuery={setQuery} setResult={setResult}/>
      <Result result={result} />
    </div>
  );
}

export default Home;