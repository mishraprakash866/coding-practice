const list = [
  "Kolkata",
  "New Delhi",
  "Ahmedabad",
  "chandigarh",
  "Gurugram",
  "Bihar",
  "Assam",
];

const filterEvent = ({ startKey = null, lastKey = null }) => {
  if (startKey === null && lastKey === null) {
    return {};
  }

  const result = {};
  if (startKey !== null) {
    const startList = list?.filter(
      (ele) => ele[0]?.toLowerCase() === startKey?.toLowerCase()
    );
    result[startKey] = startList;
  }

  if (lastKey !== null) {
    const lastList = list?.filter(
      (ele) => ele[ele?.length - 1]?.toLowerCase() === lastKey?.toLowerCase()
    );
    result[lastKey] = lastList;
  }

  return result;
};

console.log(filterEvent({ startKey: "a" }));
