// app/layout.js
// This sets the global structure of every page.
// Applies global CSS, fonts, and wraps the entire app.

import './globals.css';

export const metadata = {
  title: 'GrovePortal Sandbox',
  description: 'Dev environment for Grove infrastructure',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
