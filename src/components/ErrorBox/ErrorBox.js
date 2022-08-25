import PropTypes from 'prop-types';
import styles from './ErrorBox.module.scss';

const ErrorBox = ({ children }) => {
  console.log(children)
  return (
    <div className={styles.errorBox}>
      <h1>
        <span className="fa fa-exclamation-triangle" />
        Error
      </h1>
      <p>
        Nie ma takiego miasta {children}
      </p>
    </div>
  );
};

ErrorBox.propTypes = { 
  children: PropTypes.string
};

export default ErrorBox;