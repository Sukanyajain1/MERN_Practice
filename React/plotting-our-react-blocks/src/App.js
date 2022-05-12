// import './App.css';
import PersonCard from './components/PersonCard';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Subcontent from './components/Subcontent';
import Advertisement from './components/Advertisement';
import styles from './components/appStyles.module.css'

function App() {
  return (
    <div className="App">
      <div className= {styles.secondary}>
        {/* this is where all of the component and functional object names go */}
        <div className={styles.success}>
          <Header/>
        </div>
        <div className={styles.flex}>
          <div className={styles.primary}>
            <Navigation/>
          </div>
          <div className={`${styles.danger} ${styles.flex}`}>
            <Main className={styles.flex}>
              <div className={`${styles.warning} ${styles.flex}`}>
                <Subcontent animalType = {"Reptile"} animalName = {"Turtle"} animalHome = {"Pacific Ocean"}/>
                <Subcontent animalType = {"Mammal"} animalName = {"Dog"} animalHome = {"New Jersey"}/>
                <Subcontent animalType = {"Fish"} animalName = {"Nemo"} animalHome = {"Anemone"}/>
              </div>
              <div className={`${styles.purple} ${styles.flex}`}>
                <Advertisement/>
                {/* <PersonCard lastName = {"Doe"} firstName = {"Jane"} age = {45} hairColor = {"Black"}/>
                <PersonCard lastName = {"Smith"} firstName = {"John"} age = {88} hairColor = {"Brown"}/> */}
              </div>
            </Main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
