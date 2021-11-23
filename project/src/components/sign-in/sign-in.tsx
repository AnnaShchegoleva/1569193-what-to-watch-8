import Logo from '../logo/logo';
import Footer from '../footer/footer';
import {useDispatch, useSelector} from 'react-redux';
import {useState, useMemo, FormEvent} from 'react';
import {checkPassword, checkEmail} from '../../utils';
import {loginAction} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {redirectToRoute} from '../../store/action';
import {AppRoute, AuthorizationStatus} from '../../const';


function SignIn(): JSX.Element {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasAttempt, setHasAttempt] = useState(false);


  const isEmailValid = useMemo(() => checkEmail(email), [email]);
  const isPasswordValid = useMemo(() => checkPassword(password), [password]);

  const isAuthenticated = useSelector(getAuthorizationStatus);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setHasAttempt(true);
    if (isEmailValid && isPasswordValid) {
      dispatch(loginAction({
        login: email,
        password,
      }));
    }
  };

  if (isAuthenticated === AuthorizationStatus.Auth) {
    dispatch(redirectToRoute(AppRoute.Main));
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={handleSubmit}>
          {hasAttempt && !isEmailValid &&
          <div className="sign-in__message">
            <p>Please enter a valid email address</p>
          </div>}

          {hasAttempt && !isPasswordValid &&
          <div className="sign-in__message">
            <p>Please enter a valid password</p>
          </div>}

          <div className="sign-in__fields">
            <div className={`sign-in__field ${hasAttempt && !isEmailValid && 'sign-in__field--error'}`}>
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" defaultValue={email} onChange={(evt) => setEmail(evt.target.value)} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={`sign-in__field ${hasAttempt && !isPasswordValid && 'sign-in__field--error'}`}>
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" defaultValue={password} onChange={(evt) => setPassword(evt.target.value)} />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
