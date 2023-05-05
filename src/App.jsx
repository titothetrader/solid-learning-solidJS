import Counter from './components/Counter';
import Schedule from './components/Schedule';

import styles from './App.module.css'

function App() {
  return (
    <div class={styles.App}>
      <h1>Learning SolidJS</h1>
      <Counter />
      <Schedule />
    </div>
  );
}

export default App;


