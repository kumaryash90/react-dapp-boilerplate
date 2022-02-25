import React, { useContext } from "react";
import { NetworkContext } from "../../NetworkContext";
import "./home.css";

const Home = () => {
    const { chainId } = useContext(NetworkContext);
    const { account, setAccount } = useContext(NetworkContext);

    return (
        <div className="home">
            <div className="container">
                <h1>account: {account}</h1>
                <h1>chain: {chainId}</h1>
            </div>
        </div>
    );
}

export default Home;