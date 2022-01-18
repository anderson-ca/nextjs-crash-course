import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span className={headerStyles.title}>WebDev</span>News
            </h1>
            <p className={headerStyles.description}>Keep up tp date with the web dev news</p>
        </div>
    )
}

export default Header
