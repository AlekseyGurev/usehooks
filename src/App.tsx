import './App.css';
import { useFetch } from './hooks/useFetch';

interface IItem {
  id: string;
  title: string;
}

function App() {
  const { data, isLoading, error, refetch } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <div>
      <div>
        <button
          onClick={() =>
            refetch({
              params: {
                _limit: 3,
              },
            })
          }
        >
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data &&
        !isLoading &&
        data.map((item: IItem) => <div key={item.id}>{item.title}</div>)}
    </div>
  );
}

export default App;
