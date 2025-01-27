import { useState } from 'react';
import { fileToDataUrl } from '../helpers/fileToDataUrl';
import Input from './Input/Input';
import Preview from './Preview/Preview';
import styles from './App.module.css';

const App = () => {
   const [images, setImages] = useState([]);

   const createImages = (urls) =>
      urls.map((u) => {
         return {
            data: u,
            id: u.length,
         };
      });

   const handleSelect = async (e) => {
      const files = [...e.target.files];
      const urls = await Promise.all(files.map((f) => fileToDataUrl(f)));

      const images = createImages(urls);
      setImages(images);
   };

   const handlerDelete = (id) => setImages(images.filter((i) => i.id !== id));

   return (
      <>
         <div className={styles['input-container']}>
            <Input onSelect={handleSelect} />
         </div>
         <div className={styles['preview-container']}>
            {images.map((i) => (
               <Preview key={i.id} url={i.data} onDelete={() => handlerDelete(i.id)} />
            ))}
         </div>
      </>
   );
};

export default App;
