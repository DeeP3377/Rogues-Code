import React from "react";
import "./Navbar.css";
import { LinkContainer } from "react-router-bootstrap";

const Navbar=()=>{
    return(
        <>
			<div className="NavbarBlock" >
            <header>
		    <div className="logo"><LinkContainer to="/"><a href="/#" className="Nav-Link-a">Rogues Code</a></LinkContainer></div>
		    <i className="material-icons"><i className="fas fa-bars"></i></i>
		    <nav>
				<div className="Nav-Link">
					<LinkContainer to="/"><a href="/#" className="Nav-Link-a">Home</a></LinkContainer>
				</div>
				
				
				<div className="Nav-Link">
					<LinkContainer to="/todo"><a href="/#" className="Nav-Link-a" >Todo</a></LinkContainer>
				</div>
				
				
		</nav>
		<div className="black"></div>
	</header>			

    </div>

        </>
    )
}
export default Navbar;