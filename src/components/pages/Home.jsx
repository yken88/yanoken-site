import styles from '../../style';
import { Hero, Skills, Footer } from '../../components';

export const Home = () => {
    return (
        <div>
            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Skills />
                    <Footer />
                </div>
            </div>
        </div>
    );
};
