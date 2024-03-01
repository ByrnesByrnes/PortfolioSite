import styles from "./styles/coffee-mug.module.less";

const CoffeeMug = () => {
    return (
        <div>
            <div className={styles.cup}>
                <div className={styles.top}>
                    <div className={styles.vapour}>
                        {Array(20).fill(0).map((_, i) => (
                            <span
                                key={i}
                                style={{ animationDelay: `${((Math.random() * 20) + 1) * -1}s` }}
                                className={styles.mist}
                            />
                        ))}
                    </div>
                    <div className={styles.circle}>
                        <div className={styles.coffee} />
                    </div>
                </div>
                <div className={styles.handle} />
            </div>
            <div className={styles.plate} />
        </div>
    );
};
export default CoffeeMug;