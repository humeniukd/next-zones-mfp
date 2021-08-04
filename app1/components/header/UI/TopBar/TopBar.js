import { Button } from "../Button";
import styles from './TopBar.module.css'

export function TopBar() {

  return (
    <div className={styles.topbar__container}>
      <div className={styles.topbar}>
        <div>
          <a href="#">
            <Button selector="button-topbar">
              FIND A REPRESENTATIVE
            </Button>
          </a>|
          <Button selector="button-topbar">
            BECOME A REPRESENTATIVE
          </Button>
        </div>
        <div>
            <Button selector="button-topbar">
              CUSTOMER LOGIN / REGISTRATION
            </Button>
        </div>
      </div>
    </div>
  );
};

