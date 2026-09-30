function App() {
  return (
    <main
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <iframe
        src="/landing-pages/sublevel-studio.html"
        title="Aaryaman Pratap Singh | Aspiring AI/ML Engineer"
        allow="fullscreen"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          display: "block",
          background: "#080808",
        }}
      />
    </main>
  );
}

export default App;