function Html() {

  const showAlert = () => {
    alert("HEY! you are hacked.");
  };

  return (
    <div>
      <h1>REACT FIRST ASSIGNMENT</h1>

      <img src="/download.jpg" alt="Online Photo" width="300" height="200" />

      <p>FIRST POINT</p>
      <p>SECOND POINT</p>
      <p>THIRD POINT</p>

      <button onClick={showAlert}>Click Me</button>
    </div>
  );
}

export default Html;