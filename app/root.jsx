import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
  } from "@remix-run/react";
  import Header from "./components/header";
  
  export default function App() {
    return (
      <html>
        <head>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <Meta />
          <Links />
        </head>
        <body>
          <Header />
          <h1>Hello world!</h1>
          <Outlet />
  
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  