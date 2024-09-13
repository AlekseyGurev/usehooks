import { useEffect, useState } from 'react';

interface IParamsRefetch {
  params: {
    _limit: number;
  };
}

export function useFetch(urlDefault: string) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [url, setUrl] = useState(urlDefault);

  function refetch(paramsRefetch: IParamsRefetch) {
    const { params } = paramsRefetch;
    if (params._limit) {
      setUrl(`${urlDefault}?_limit=${params._limit}`);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Ошибка загрузки');
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError('');
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  return { data, isLoading, error, refetch };
}
