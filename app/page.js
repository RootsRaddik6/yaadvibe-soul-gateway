export default function Home() {
  return (
    <main style={{
      background: "black",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1>YaadVibe Ecosystems</h1>
      <p>Public Landing — Safe & Web2 Only</p>

      <a href="/ton-entry" 
         style={{
           marginTop: "40px",
           padding: "12px 24px",
           border: "1px solid white",
           color: "white",
           textDecoration: "none"
         }}>
        Enter Orb Gate
      </a>
    </main>
  );
}
