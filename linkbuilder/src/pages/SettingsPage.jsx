import React, { useState, useEffect, useRef } from "react";
import "../style.css";
import { espOptions, initialDomains } from "../types";

const SettingsPage = () => {
  const [domains, setDomains] = useState(initialDomains);
  const myRef = useRef(null);

  useEffect(() => {
    const storedDomains = localStorage.getItem("domains");
    if (storedDomains) {
      setDomains(JSON.parse(storedDomains));
    } else {
      localStorage.setItem("domains", JSON.stringify(domains));
      setDomains(initialDomains);
    }
  }, []);

  useEffect(() => {
    if (!myRef.current) {
        myRef.current = true;
        return;
    } else {
        localStorage.setItem("domains", JSON.stringify(domains));
    };

  }, [domains]);

  const [newDomain, setNewDomain] = useState({
    name: "",
    track: "",
    esp: "",
    rt: "",
    abbr: "",
    user: "",
  });

  const handleChange = (e) => {
    setNewDomain({ ...newDomain, [e.target.name]: e.target.value });
  };

  const handleAddDomain = (e) => {
    e.preventDefault();
    if (!newDomain.name) return;
    setDomains({
      ...domains,
      [newDomain.name]: {
        track: newDomain.track,
        esp: newDomain.esp,
        rt: newDomain.rt,
        abbr: newDomain.abbr,
        user: newDomain.user,
      },
    });
    setNewDomain({
      name: "",
      track: "",
      esp: "",
      rt: "",
      abbr: "",
      user: "",
    });
  };

  const handleDeleteDomain = (name) => {
    const updated = { ...domains };
    delete updated[name];
    setDomains(updated);
  };

  return (
    <div className="settings-page">
      <h2>Settings</h2>
      <h3>Add New Domain</h3>
      <form
        onSubmit={handleAddDomain}
        style={{ display: "flex", flexDirection: "column", maxWidth: 400 }}
      >
        <input
          name="name"
          placeholder="Domain Name"
          value={newDomain.name}
          onChange={handleChange}
          required
        />
        <input
          name="track"
          placeholder="Track"
          value={newDomain.track}
          onChange={handleChange}
        />
        <select
          name="esp"
          value={newDomain.esp}
          onChange={handleChange}
        >
          {Object.entries(espOptions).map(([label, value]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <input
          name="rt"
          placeholder="RT"
          value={newDomain.rt}
          onChange={handleChange}
        />
        <input
          name="abbr"
          placeholder="Abbreviation"
          value={newDomain.abbr}
          onChange={handleChange}
        />
        <input
          name="user"
          placeholder="User"
          value={newDomain.user}
          onChange={handleChange}
        />
        <button type="submit">Add Domain</button>
      </form>
      <h3>Domains</h3>
      <ul className="domain-list">
        {Object.entries(domains).map(([name, props]) => (
          <li key={name} className="domain-item">
            <strong>{name}</strong> <br />
            {Object.entries(props).map(([key, value]) => (
              <span key={key} className="domain-prop">
                <p className="domain-prop-key">{key}</p>
                <p className="domain-prop-value">{value}</p>
              </span>
            ))}
            <button
              className="delete-button"
              onClick={() => handleDeleteDomain(name)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default SettingsPage;