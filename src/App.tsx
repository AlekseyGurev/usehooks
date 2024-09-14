import './App.css';
import { useViewportSize } from './hooks/useViewportSize';

function App() {
  const { height, width } = useViewportSize();

  return (
    <>
      <div className="card">
        Width: {width}, height: {height}
      </div>
    </>
  );
}

export default App;
