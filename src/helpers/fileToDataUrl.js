export const fileToDataUrl = (file) => {
   return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.addEventListener('load', (e) => {
         resolve(e.currentTarget.result);
      });

      fileReader.addEventListener('error', (e) => {
         reject(new Error(e.currentTarget.error));
      });

      fileReader.readAsDataURL(file);
   });
};
