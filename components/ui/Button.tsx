import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";

import styles from "./Button.module.css";

type ButtonProps = {
  link?: string;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FunctionComponent<ButtonProps> = ({
  link,
  onClick,
  children,
}) => {
  if (link) {
    return (
      <Link href={link} className={styles.btn}>
        {children}
      </Link>
    );
  } else {
    return (
      <button onClick={onClick} className={styles.btn}>
        {children}
      </button>
    );
  }
};

export default Button;
