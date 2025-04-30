import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';


const App = () => {
  
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weightField) {

    } else {
      alert('Digite todos os campos')
    }
  }

  return (
    
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>O IMC, ou Índice de Massa Corporal, é uma medida que estima a quantidade de gordura corporal de uma pessoa, utilizando seu peso e altura.</p>

          <input type="number" 
            placeholder='Digite a sua altura. Ex. 1.5 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />
          <input type="number" 
            placeholder='Digite o seu peso. Ex. 75,3 (em kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
        
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
      
    </div>
  );
}

export default App