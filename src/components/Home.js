import React, { useState } from "react";
import { Button } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

var data1;
var data2;
const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const [flag, setFlag]=useState(false);
 
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const createAccount= async() =>{

    
    
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/ethereum/wallet`,
      {
        method: 'GET',
        headers: {
          'x-testnet-type': 'ethereum-ropsten',
          'x-api-key': '3b9b4784-cfd2-414b-9093-d8ff07b1461e'
        }
      }
    );

    const data = await resp.json();
    data1=data.xpub; 
    data2=data.mnemonic;
    
    console.log(data);
    

   
    // html+="<p>"+data.xpub+"</p>"
    
    // document.getElementById('data').innerHTML = html;
    setFlag(true);
      window.alert("Public Key :\n" + data1);
      window.alert("Mnemonic :\n"+ data2);
      
  };
  const getAccount= async() => {
    const xpub= data1;
    const index = 0;
    const resp = await fetch(
      `https://api-eu1.tatum.io/v3/ethereum/address/${xpub}/${index}`,
      {
        method: 'GET',
        headers: {
          'x-testnet-type': 'ethereum-ropsten',
          'x-api-key': '3b9b4784-cfd2-414b-9093-d8ff07b1461e'
        }
      }
     );

      const data2 = await resp.text();
      console.log(data2);
      window.alert("Account Address :\n" + data2);

};

  
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Welcome to NU10 Home <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
      &nbsp;
      <div className="d-grid gap2" >

        <Button variant= "secondary" onClick={createAccount} style={{display: !flag ? "block" : "none"}}>
              Create wallet
        </Button>

      </div>

      &nbsp;
      <div className="d-grid gap2">

        <Button variant= "secondary" onClick={getAccount}  style={{display: flag ? "block" : "none"}}>
              Get Account Address
        </Button>

      </div>


      
    </>

   
  );
};

export default Home;
