function index() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #e0e0e0",
      }}
    >
      <div style={{ alignItems: "center", width: "100%", height: "100px" }}>
        <img
          src="src/assets/logo.jpg"
          alt="logo"
          style={{ objectFit: "cover", width: "300px", height: "100px" }}
        />
      </div>
      <h1>SIDEBAR</h1>
    </div>
  );
}

export default index;
