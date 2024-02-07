import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Contacts</h1>
      <p>The people you know are ____</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}