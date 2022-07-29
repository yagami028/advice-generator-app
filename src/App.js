import React, { useState, useEffect } from "react";
import './index.css';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// import divider-mobile from '../public/images/'

function App() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState(null);

  const getAdvice = async () => {
    const response = await fetch(`https://api.adviceslip.com/advice`);
    const responseJSON = await response.json();
    return responseJSON.slip;
  };

  const newAdvice = () => getAdvice().then((data) => {
      const { id, advice } = data;
      setAdvice(advice);
      setId(id);
      console.log('click');
    });

  useEffect(() => {
    newAdvice();
    console.log("update");
  }, []);


  return (
    <main className="container">
      <div className="card">
        <p className="advice-id">advice # {id}</p>
        <h3 className="advice-text">
          <FaQuoteLeft className="quote" />
          {advice}
          <FaQuoteRight className="quote" />
        </h3>
        <div className="btn-container">
          <div className="divider"></div>
          <button className="btn" onClick={newAdvice}/>
        </div>
      </div>
    </main>
  );
}

export default App;
