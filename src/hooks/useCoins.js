import {useState, useEffect} from 'react';

// Libs
import Http from '../libs/Htpp';

export const useCoins = () => {
  // URL API
  const urlAPI = 'https://api.coinlore.net/api/tickers/';

  const [coins, setCoins] = useState();

  useEffect(() => {
    (async () => {
      const response = await Http.instance.get(urlAPI);

      setCoins(response.data);
    })();
  }, []);
  return [coins, setCoins];
};
