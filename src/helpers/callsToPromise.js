export const task = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hola mundo!");
    }, 2000);
  });
  return promise;
};
