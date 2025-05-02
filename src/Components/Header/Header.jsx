import styles from './Header.module.css'
const Header = ()=>{
    return(
        <>
        <header>
            <nav>
                <div className={`${styles.logo}`}>
                    <img src="Images/Frame 2 1.png"></img>
                </div>
                <div className={`${styles.list}`}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>

                    </ul>
                </div>

            </nav>
        </header>




    </>)
}
export default Header;