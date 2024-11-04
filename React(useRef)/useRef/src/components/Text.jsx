export const Text = ({children}) => {
  return (
    <div style={{ width: "33%", border: "1px solid black" }}>
      <div style={{ width: "33%" }}>
        <img
          src="https://assets.smartelectronics.az/Assets/cdn-cgi?width=320&height=320&path=08ce33db-4613-427d-b8ce-d8a7e08dc8d0.png"
          width="100%"
          alt="this is clock"
        />
      </div>
      <div className="wrapperDecription">
        <p>Title</p>
        <p>Description</p>
      </div>
      <div className="wrapperButtons">
       {children}
      </div>
    </div>
  );
};
