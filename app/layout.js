export const metadata = {
  title: "YaadVibe Soul Gateway",
  description: "SBT PoC for YaadVibe Ecosystems",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
   <html lang="en">
  <head>
    <meta name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
  </head>
  <body>{children}</body>
</html>
  );
}
