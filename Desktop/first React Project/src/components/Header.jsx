import reactImg from '../assets/react-core-concepts.png'


const descriptions = ['Fundamental', 'Crucial','Core'];
function getRandomWord(mot){
  return Math.floor(Math.random()*(mot+1));
}


function Header() {
  return (
     <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {descriptions[getRandomWord(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  );
}

export default Header;