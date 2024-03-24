import './Footer.css';

function Footer() {
    return ( 
        <footer>
            <div className="img-container">
                <img src="../../public/logo1.svg" alt="deutsche telekom stiftung logo" />
                <img src="../../public/logo2.jpg" alt="deutsch polnisches jugendwerk logo" />
                <img src="../../public/logo3.jpg" alt="fals solingen logo" />
                <img src="../../public/logo4.png" alt="zsk poznań logo" />
            </div>
            <div className="creator-container">
                <p>Pina Munsch</p>
                <p>Jakob Pohl</p>
                <p>Mateusz Najsarek</p>
                <p>Igor Zieliński</p>
            </div>
        </footer>
     );
}

export default Footer;