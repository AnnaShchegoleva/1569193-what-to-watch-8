import MainScreen from '../main-screen/main-screen';

const filmPromo ={
  promoMovieTitle: 'The Grand Budapest Hotel',
  promoGenre: 'Drama',
  promoDate: '2014',
};

function App(): JSX.Element {
  return (
    < MainScreen titleMovie={filmPromo.promoMovieTitle} genre={filmPromo.promoGenre} date={filmPromo.promoDate} />
  );
}

export default App;
