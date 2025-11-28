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
      <body>{children}</body>
    </html>
  );
}
