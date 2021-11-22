import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link className="link-return-url" to="/">Return to main page</Link>
    </>
  );
}

export default NotFound;
