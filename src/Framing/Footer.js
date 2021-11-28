function UselessFooter() {
  return (
    <>
      <hr />
      <br />
      <br />
      <div style={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        padding: "1em",
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, .5)"
      }}>
        <button style={{marginRight: "1em"}} className="btn btn-primary">Add Site</button>
        <button className="btn btn-success">Save!</button>
      </div>

      <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"></script>
    </>
  );
}

export default UselessFooter;
