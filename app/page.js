export default function Page() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#000", color: "#fff" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "48px" }}>YaadVibe Ecosystems</h1>
        <p>Public Landing — Safe & Web2 Only</p>
        <a href="/ton-entry" style={{ display: "inline-block", marginTop: 24, padding: "12px 30px", border: "1px solid white", color: "white", textDecoration: "none" }}>
          Enter Orb Gate
        </a>
      </div>
    </main>
  );
}
