import { useState } from 'react';
import { fileToDataUrl } from '../helpers/fileToDataUrl';
import Input from './Input/Input';
import Preview from './Preview/Preview';
import styles from './App.module.css';

const App = () => {
   const [images, setImages] = useState([]);

   const createImage = (urls) =>
      urls.map((u) => {
         return {
            data: u,
            id: Math.round(u.length * Math.random()),
         };
      });

   const handleSelect = async (e) => {
      const files = [...e.target.files];
      const urls = await Promise.all(files.map((f) => fileToDataUrl(f)));

      const images = createImage(urls);
      setImages((prev) => [...prev, ...images]);
   };

   const handleDelete = (id) => setImages(images.filter((i) => i.id !== id));

   console.log(images);

   return (
      <>
         <div className={styles['input-container']}>
            <Input onSelect={handleSelect} />
         </div>
         <div className={styles['preview-container']}>
            {images.map((i) => (
               <Preview key={i.id} url={i.data} onDelete={() => handleDelete(i.id)} />
            ))}
         </div>
      </>
   );
};

export default App;
