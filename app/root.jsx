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
          <title>Route Tracker</title>
          <Meta />
          <Links />
        </head>
        <body>
          <Header />
          <Outlet />
  
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
  