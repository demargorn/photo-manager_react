import styles from './Input.module.css';

const Input = ({ onSelect }) => {
   return (
      <>
         <input type='file' multiple className={styles['input']} onChange={onSelect} />
         <span className={styles['text']}>Click to select</span>
      </>
   );
};

export default Input;
