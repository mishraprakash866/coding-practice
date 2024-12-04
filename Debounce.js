const useDebounce = () => {
  let timeOut;
  return (event, delay = 1000, ...arg) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      event(arg);
    }, delay);
  };
};

function printData(count) {
  console.log(`Test-${count}`);
}

const debounce = useDebounce();

debounce(printData, 1000, 1);
debounce(printData, 1000, 2);
