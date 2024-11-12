import Navbar from '../Components/Navbar';
import Body from '../Components/Body';
import Badges from '../Components/Badges';
import Feature from '../Components/Feature';
import Next from '../Components/Next';
import Trusted from '../Components/Trusted';
import FAQSection from '../Components/FaqSection';
import Footer from '../Components/Footer';


function Home() {
    return (
      <>
        <Navbar />
        <Body/>
        <Badges/>
        <Feature/>
        <Next/>
        <FAQSection/>
        <Trusted/>
        <Footer/>
      </>
    );
  }
  
  export default Home;
  