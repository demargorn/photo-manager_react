import styles from './Input.module.css';

const Input = ({ onSelect }) => {
   return (
      <div className={styles['input-container']}>
         <input type='file' multiple className={styles['input']} onChange={onSelect} />
         <span className={styles['text']}>Click to select</span>
      </div>
   );
};

export default Input;
