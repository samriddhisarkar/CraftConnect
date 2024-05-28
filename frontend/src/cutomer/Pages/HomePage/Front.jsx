import Navigation from './Navigation';
import Footer from './Footer';
// import Filter from './Filter';
// import CartPage from './CartPage';
import Home from './Home';

function Front() {
  const mainContentStyle = {
    background: '#d7d7d7'
    
    // overflow: 'auto' // Allow overflow content to be scrollable if needed
  };

  return (
    <div className="">
      <Navigation/>
      <div className="main-content" style={mainContentStyle}>
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default Front;
