import ProfileGuard from "../Auth/Profile/Guard";
import "./index.css";
import { NavLink } from "react-router-dom";
import useWeb5Store from "@/stores/useWeb5Store.ts";
import { Agent } from "../Auth/types";
import { useProfile } from "@/stores/profile.ts";
import { useState } from "react";

const index = () => {
  const { web5, did } = useWeb5Store((state) => ({
    web5: state.web5,
    did: state.did,
  }));
  const { signIn, setShowAuthModal, signOut } = useProfile((state) => ({
    signIn: state.signIn,
    signOut: state.signOut,
    setShowAuthModal: state.setShowAuthModal,
  }));

  const beginAuthFlow = async (agent: Agent) => {
    const signedIn = await signIn(agent);
    if (!signedIn) {
      console.log("displaying auth modal");
      setShowAuthModal(true);
    }
  };

  const [showSignOutUtils, setShowSignOutUtils] = useState<boolean>(false);
  return (
    <div className="main_navbar_container">
      <div className="logo_container">
        <i className="fa-brands fa-paypal"></i>
        <i className="fa fa-heartbeat"></i>
      </div>
      <div className="comp_menu_container">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div>
            <i className="fa fa-home"></i>
            <h3>Home</h3>
          </div>
        </NavLink>
        <NavLink to="/records" style={{ textDecoration: "none" }}>
          <div>
            <i className="fa fa-database"></i>
            <h3>Records </h3>
            <span>28</span>
          </div>
        </NavLink>
        <NavLink to="/chat" style={{ textDecoration: "none" }}>
          <div>
            <i className="fas fa-comment-alt"></i>
            <h3>Chats </h3>
            <span>5</span>
          </div>
        </NavLink>
        <NavLink to="/remedies" style={{ textDecoration: "none" }}>
          <div>
            <i className="fas fa-first-aid"></i>
            <h3>DIY Remedies</h3>
            <span>99+</span>
          </div>
        </NavLink>
        <NavLink to="/contact" style={{ textDecoration: "none" }}>
          <div>
            <i className="fa fa-address-book"></i>
            <h3>Contact</h3>
          </div>
        </NavLink>
      </div>
      <ProfileGuard
        fallback={
          <button
            type="button"
            className="auth_container"
            onClick={() => () => (web5 && did ? signOut() : null)}
          >
            <h3>Connect Wallet</h3>
            <i className="fa fa-user"></i>
          </button>
        }
      >
        {showSignOutUtils && (
          <div className="did-container">
            <div>
              <b style={{ fontFamily: "Roboto" }}>DID:</b>
              <input type="text" value={"$0$02$9$"} placeholder="did field" />
            </div>
            <button type="button" className="auth_container">
              <h3>Sign Out</h3>
              <i className="fa fa-sign-out"></i>
            </button>
          </div>
        )}

        <button
          type="button"
          className="auth_container"
          onClick={() => setShowSignOutUtils(!showSignOutUtils)}
        >
          <h3>In App</h3>
          <i className="fa fa-sign-out"></i>
        </button>
      </ProfileGuard>
    </div>
  );
};

export default index;
