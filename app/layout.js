export const metadata = {
  title: "YaadVibe Soul Gateway",
  description: "SBT PoC for YaadVibe Ecosystems"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
