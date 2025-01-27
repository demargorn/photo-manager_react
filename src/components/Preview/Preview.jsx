import styles from './Preview.module.css';

const Preview = ({ url, onDelete }) => {
   return (
      <div className={styles['preview']}>
         <img src={url} alt='' className={styles['img']} />
         <button className={styles['close-btn']} onClick={onDelete} />
      </div>
   );
};

export default Preview;
