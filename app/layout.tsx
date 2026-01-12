import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>TailAdmin</title>
        <link rel="icon" href="assets/favicon.ico" />
        <link rel="apple-touch-icon" href="assets/apple-touch-icon.png" />
        <link rel="icon" href="assets/android-chrome-192x192.png" />
        <link rel="icon" href="assets/android-chrome-512x512.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
