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
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';

const mapStateToProps = ({films, isDataLoaded, promoFilm}: State) => ({
  films,
  isDataLoaded,
  promoFilm,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props : PropsFromRedux): JSX.Element {
  const {isDataLoaded, films, promoFilm} = props;

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <MainScreen promoFilm={promoFilm}/>
        </Route>
        <Route path={AppRoute.SignIn} exact>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => <MyList films={films.filter((film) => film.is_favorite)} />}
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route path={AppRoute.Film} render={(routeProps) =>
          (films.filter((film) => film.id === Number(routeProps.match.params.id)))[0] ? <Film film={(films.filter((film) => film.id === Number(routeProps.match.params.id)))[0]}/> : <NotFound />}
        exact
        >
        </Route>
        <Route path={AppRoute.AddReview} render={(routeProps) =>
          (films.filter((film) => film.id === Number(routeProps.match.params.id)))[0] ? <AddReview film={(films.filter((film) => film.id === Number(routeProps.match.params.id)))[0]}/> : <NotFound />}
        exact
        >
        </Route>
        <Route path={AppRoute.Player} render={(routeProps) =>
          (films.filter((film) => film.id === Number(routeProps.match.params.id)))[0] ? <Player film={(films.filter((film) => film.id === Number(routeProps.match.params.id)))[0]}/> : <NotFound />}
        exact
        >
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default connector(App);
