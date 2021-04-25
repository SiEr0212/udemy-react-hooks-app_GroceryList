import { useState } from "react";

function useList(init) {
  const [list, setlist] = useState(init);

  return {
    list,
    removeItem(item) {
      const filteredList = list.filter((v) => v.name !== item);
      setlist(filteredList);
    },
    saveItem(index, newVal) {
      const copyList = [...list];
      copyList[index].name = newVal;
    },
  };
}

export default useList;
