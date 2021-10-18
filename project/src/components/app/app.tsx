import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainScreen from '../main-screen/main-screen';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
/*import films from '../../mocks/films';
import reviews from '../../mocks/reviews';
import authInfo from '../../mocks/auth-info';*/
import {Films, Reviews} from '../../types/film';

type AppScreenProps = {
  films: Films;
  reviews: Reviews;
}

function App({films, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainScreen titleMovie={films[0].name} genre={films[0].genre} date={films[0].released} />
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route path={AppRoute.Film} exact>
          <Film />
        </Route>
        <Route path={AppRoute.AddReview} exact>
          <AddReview />
        </Route>
        <Route path={AppRoute.Player} exact>
          <Player />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
