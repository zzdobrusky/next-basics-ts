import { FunctionComponent, ReactNode } from "react";


import styles from './ErrorAlert.module.css';

type ErrorAlertProps = {
  children: ReactNode;
};

const ErrorAlert: FunctionComponent<ErrorAlertProps> = ({ children }) => {
  return <div className={styles.alert}>{children}</div>;
}

export default ErrorAlert;
