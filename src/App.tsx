import styles from './App.module.css';
import poweredImage from './assets/powered.png';


const App = () => {
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
          placeholder='Digite a altura em metros'
                 
          />
        
        </div>
        <div className={styles.rightSide}>
          ...
        </div>
      </div>
      
    </div>
  );
}

export default App