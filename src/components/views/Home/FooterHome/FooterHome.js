




















import styles from './FooterHome.module.css';

function Footer(props) {

    const { footer, footerPar } = props;

    return (

        <footer className={footer}>
            <p className={footerPar} >The place to discuss our endless passion for the interactive entertainment</p>
        </footer>

    );

}

Footer.defaultProps = {
    footer: styles.footer,
    footerPar: styles.footerPar
}

export default Footer;

