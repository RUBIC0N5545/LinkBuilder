import { useState } from "react";
import '../style.css';
import { espOptions, initialDomains } from "../types";

const MainPage = () => {
    const [linkType, setLinkType] = useState("Default");
    const [result, setResult] = useState("");
    const [radtrack, setRadtrack] = useState("");
    const [currentDomain, setCurrentDomain] = useState("TrustedGoldReserve");
    const [sendType, setSendType] = useState("B");
    const [product, setProduct] = useState("");
    const [customText, setCustomText] = useState("");

    const storedDomains = localStorage.getItem("domains");
    const domains = storedDomains ? JSON.parse(storedDomains) : initialDomains;

    const linkTypes = ['Default', 'Space-Ads', 'Unsub'];

    const sendTypes = ["B", "OF", "F", "BE", "K", "S", "DedEmail"];

    const handleGenerateLink = () => { 
        let res = '';
        console.log('currentDomain', currentDomain);

        if (linkType === 'Default') {
            res = `https://${domains[currentDomain].track}/${radtrack}?email=${espOptions[domains[currentDomain].esp]}&domain=${domains[currentDomain].user}${domains[currentDomain].abbr}&type=${sendType}&product=${product}`;
        } else if (linkType === 'Space-Ads') {
            res = `https://${domains[currentDomain].track}/${radtrack}?email=${espOptions[domains[currentDomain].esp]}&domain=${domains[currentDomain].user}${domains[currentDomain].abbr}&type=SA&product=${product}_SA`;
        } else if (linkType === 'Unsub') {
            res = `https://${domains[currentDomain].track}/${radtrack}?email=${espOptions[domains[currentDomain].esp]}&domain=${domains[currentDomain].user}${domains[currentDomain].abbr}&type=unsub`;
        }

        setResult(res);
        navigator.clipboard.writeText(res);

    }
    return (
        <div className="container">
            <div class="main">
                <select id="link-type" placeholder="Select link type" value={linkType}>
                    {linkTypes.map(linkType => (
                        <option key={linkType} value={linkType} onChange={() => setLinkType(linkType)}>{linkType}</option>
                    ))}
                </select>
                <select id="domain" placeholder="Enter domain" value={currentDomain} onChange={(e) => setCurrentDomain(e.target.value)}>
                    {Object.keys(domains).map(domain => (
                        <option key={domain} value={domain} onChange={() => setCurrentDomain(domain)}>{domain}</option>
                    ))}
                </select>
                <div id="rt-block">
                    <input 
                        type="text" 
                        id="radtrack" 
                        placeholder="Enter radtrack" 
                        value={radtrack} 
                        onChange={(e) => setRadtrack(e.target.value)} 
                    />
                    <p id="radtrack-info">{domains[currentDomain].rt}</p>
                </div>
                <select 
                    name="send-type" 
                    id="send-type" 
                    placeholder="Enter send type" 
                    value={sendType}
                >
                    {sendTypes.map(type => (
                        <option key={type} value={type} onChange={() => setSendType(type)}>{type}</option>
                    ))}
                </select>
                <input 
                    type="text" 
                    id="product" 
                    placeholder="Enter product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}    
                />

                <button id="generateLink" onClick={handleGenerateLink}>Generate Link and Copy</button>
            </div>
            <p id="result">{result}</p>
            <textarea 
                type="text" 
                id="customText" 
                onChange={(e) => setCustomText(e.target.value)}
            >
                {customText}
            </textarea>
        </div>
    );
};

export default MainPage;
