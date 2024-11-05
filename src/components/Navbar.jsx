import { Link } from 'react-router-dom'; 
 const Navbar = () => { 
return ( 
<div id="navbar"> 
<Link to="/blue">blue</Link> 
<Link to="/red">red</Link> 
</div> 
); 
} 
export default Navbar;