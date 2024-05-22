import React, { useState, useEffect } from 'react';
import './MyAssets.css'; // Import the CSS file

const MyAssets = () => {
  const [communication, setCommunication] = useState(0);
  const [leadership, setLeadership] = useState(0);
  const [timeManagement, setTimeManagement] = useState(0);
  const [teamWork, setTeamWork] = useState(0);


  const [javaScript, setJavaScript] = useState(0);
  const [python, setPython] = useState(0);
  const [java, setJava] = useState(0);
  const [cSharp, setCSharp] = useState(0);
  const [ruby, setRuby] = useState(0);
  const [php, setPhp] = useState(0);
  const [swift, setSwift] = useState(0);
  const [kotlin, setKotlin] = useState(0);
  const [sql, setSql] = useState(0);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [react, setReact] = useState(0);


  useEffect(() => {
    fetch('/api.json')
      .then(response => response.json())
      .then(data => {
        const coreComp = data["user-groups"]["core-competency"];
        const techAbility = data["user-groups"]["technical-ability"];
        console.log("JSON data:", data)
        setCommunication(coreComp.communication);
        setLeadership(coreComp.leadership);
        setTimeManagement(coreComp["time management"]);
        setTeamWork(coreComp["team work"]);

        setJavaScript(techAbility.JavaScript);
        setPython(techAbility.Python);
        setJava(techAbility.Java);
        setCSharp(techAbility["C#"]);
        setRuby(techAbility.Ruby);
        setPhp(techAbility.PHP);
        setSwift(techAbility.Swift);
        setKotlin(techAbility.Kotlin);
        setSql(techAbility.SQL);
        setHtml(techAbility.HTML);
        setCss(techAbility.CSS);
        setReact(techAbility.React);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1>Developer Skills Section</h1>
      <h2>Core Competency</h2>
      <div className="competency-container">
        <div className="box">
          <div className="value">{communication}</div>
          <div className="key">Communication</div>
        </div>
        <div className="box">
          <div className="value">{leadership}</div>
          <div className="key">Leadership</div>
        </div>
        <div className="box">
          <div className="value">{timeManagement}</div>
          <div className="key">Time Management</div>
        </div>
        <div className="box">
          <div className="value">{teamWork}</div>
          <div className="key">Team Work</div>
        </div>
      </div>

      <h2>Technical Ability</h2>
      <div className="ability-container">
        <div className="tech-box">
          <div className="value">{javaScript}</div>
          <div className="key">JavaScript</div>
        </div>
        <div className="tech-box">
          <div className="value">{python}</div>
          <div className="key">Python</div>
        </div>
        <div className="tech-box">
          <div className="value">{java}</div>
          <div className="key">Java</div>
        </div>
        <div className="tech-box">
          <div className="value">{cSharp}</div>
          <div className="key">C#</div>
        </div>
        <div className="tech-box">
          <div className="value">{ruby}</div>
          <div className="key">Ruby</div>
        </div>
        <div className="tech-box">
          <div className="value">{php}</div>
          <div className="key">PHP</div>
        </div>
        <div className="tech-box">
          <div className="value">{swift}</div>
          <div className="key">Swift</div>
        </div>
        <div className="tech-box">
          <div className="value">{kotlin}</div>
          <div className="key">Kotlin</div>
        </div>
        <div className="tech-box">
          <div className="value">{sql}</div>
          <div className="key">SQL</div>
        </div>
        <div className="tech-box">
          <div className="value">{html}</div>
          <div className="key">HTML</div>
        </div>
        <div className="tech-box">
          <div className="value">{css}</div>
          <div className="key">CSS</div>
        </div>
        <div className="tech-box">
          <div className="value">{react}</div>
          <div className="key">React</div>
        </div>
      </div>
    </div>
  );
};

export default MyAssets;
