export default (status: number, data: any, resolve_time: number = 500) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        status: status,
        json: () =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(data);
            }, resolve_time / 2);
          })
      });
    }, resolve_time / 2);
  });
