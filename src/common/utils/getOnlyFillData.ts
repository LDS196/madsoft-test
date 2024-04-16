export const getOnlyFillData = (object: any) => {
  const data = Object.assign(object);

  Object.keys(data).forEach((key) => {
    if (object[key] === null || object[key] === '' || object[key] === undefined) {
      delete object[key];
    }

    if (object[key] instanceof Map) {
      object[key].forEach((value: string, key: any) => {
        data[key] = `[${value}]`;
      });
      delete data[key];
    }
  });

  return data;
};