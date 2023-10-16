import logo from '../images/logo.jpg';
const igCrueca = 'https://www.instagram.com/cabezarueca/?hl=es';
function App() {
  return (
    <>
      <header className='header'>
        <a href={igCrueca} target='_blank' rel='noreferrer'>
          <img src={logo} className='logo react' alt='React logo' />
        </a>
        <h1 className='header__title'>Cabeza Rueca</h1>
      </header>
      <main className='main'>
        <article className='article'>
          <h2 className='article__title'>Hilo demás...</h2>
          <p className='article__text'>
            Quien escribe, teje. Texto proviene del latín, “textum” que
            significa tejido. Con hilos de palabras vamos diciendo, con hilos de
            tiempo vamos viviendo. Los textos son como nosotros: tejidos que
            andan.
          </p>
          <footer className='article__footer'>
            <a
              className='article__footer--btn'
              href={igCrueca}
              target='_blank'
              rel='noreferrer'
            >
              Acá podés ver lo que tejo
            </a>
          </footer>
        </article>
      </main>
      <footer className='footer'>Copy</footer>
    </>
  );
}
export default App;
