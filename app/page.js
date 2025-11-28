export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "black",
      color: "white"
    }}>
      <h1>YAADVIBE</h1>
      
      <a href="/ton-entry"
         style={{ 
           marginTop: "20px", 
           padding: "12px 24px", 
           border: "1px solid white",
           textDecoration: "none",
           color: "white"
         }}>
        Open Portal
      </a>
    </main>
  );
}
