import logo from './logo.svg';
import './App.css';
import Navbar from "./component/Navbar/Navbar";
import {DarkTheme} from "./Theme/DarkTheme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import HeroSection from "./component/HeroSection/HeroSection";


function App() {
    return (


    <div>
        <Navbar/>
        <HeroSection />
    </div>

    );
}

export default App;
