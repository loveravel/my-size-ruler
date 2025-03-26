import React, { useState, useEffect } from 'react';
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import OrientationWarning from "~/components/OrientationWarning/OrientationWarning";
import DesktopWarning from "~/components/DesktopWarning/DesktopWarning";
import "./app.scss";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isPortrait, setIsPortrait] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsPortrait(window.innerHeight > window.innerWidth);
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
      };

      const handleTouchMove = (event: TouchEvent) => {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      };

      const handleGestureStart = (event: Event) => {
        event.preventDefault();
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      document.addEventListener("touchmove", handleTouchMove, { passive: false });


      return () => {
        window.removeEventListener("resize", handleResize);
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("gesturestart", handleGestureStart);
      };
    }
  }, []);

  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <Meta />
      <Links />
    </head>
    <body>
    {isMobile ? (
      isPortrait ? (
        children
      ) : (
        <OrientationWarning />
      )
    ) : (
      <DesktopWarning />
    )}
    <ScrollRestoration />
    <Scripts />
    </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}