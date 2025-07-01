import styles from "./HeaderMenu.module.css";
import logo from "../../assets/logo.png";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";

function SocialMediaIcon() {
    const socialMediaData = [
        {
            name: "facebook",
            url: "https://www.facebook.com",
            icon: facebookIcon
        },
        {
            name: "instagram",
            url: "https://www.instagram.com",
            icon: instagramIcon
        },
        {
            name: "twitter",
            url: "https://www.twitter.com",
            icon: twitterIcon
        },
        {
            name: "youtube",
            url: "https://www.youtube.com",
            icon: youtubeIcon
        }
    ]

    return (
        <ul className={styles.socialIcons}>
            <li>
                {socialMediaData.map((media) => (
                    <a
                        key={media.name}
                        href={media.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialMediaLink}
                    >
                        <img
                            src={media.icon}
                            alt={`${media.name} icon`}
                            className={styles.socialMediaIcon}
                        />
                    </a>
                ))}
            </li>
        </ul>
    )
}

function HeaderButtons(){
    const navigationButtons = [
        { name: 'Início', link: '/' },
        { name: 'Igreja', link: '/igreja' },
        { name: 'Missão', link: '/missao' },
        { name: 'Departamentos', link: '/departamentos' },
        { name: 'Contribua', link: '/contribua' },
        { name: 'Doação', link: '/doacao' }
    ];

    return (
        <div className={styles.headerButtons}>
            {navigationButtons.map((button) => (
                <a
                    key={button.name}
                    href={button.link}
                    className={button.name == 'Doação' ? styles.donateButton : styles.buttonLink}
                >
                    {button.name}
                </a>
            ))}
        </div>
    )
}

function HeaderMenu() {
    return (
        <header>
            <nav className={styles.navMenu}>
                <div>
                    <img src={logo} alt="logo" className={styles.logo} />
                </div>
                <div className={styles.navContainer}>
                    <SocialMediaIcon/>
                    <HeaderButtons/>
                </div>
            </nav>
        </header>
    )
}

export default HeaderMenu;