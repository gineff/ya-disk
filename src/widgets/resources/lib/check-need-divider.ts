export  const checkNeedDivider = () => {
  let isFileResource = false;
  return function(type: string) {
    if (isFileResource) return false;
    if (type === 'file') {
      isFileResource = true;
      return true;
    }
    return false;
  };
};
