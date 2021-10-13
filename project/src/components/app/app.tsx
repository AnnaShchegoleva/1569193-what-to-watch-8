import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';


const filmPromo ={
  promoMovieTitle: 'The Grand Budapest Hotel',
  promoGenre: 'Drama',
  promoDate: '2014',
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <MainScreen titleMovie={filmPromo.promoMovieTitle} genre={filmPromo.promoGenre} date={filmPromo.promoDate} />
        </Route>
        <Route path='/sign-in' exact>
          <SignIn />
        </Route>
        <Route path='/mylist' exact>
          <MyList />
        </Route>
        <Route path='/films/:id' exact>
          <Film />
        </Route>
        <Route path='/films/:id/review' exact>
          <AddReview />
        </Route>
        <Route path='/player/:id' exact>
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
