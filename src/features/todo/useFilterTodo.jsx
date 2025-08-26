// import { useState } from "react";

import { useMemo } from "react";

function useFilterTodo(data) {
  // const [dataSource,setDataSource] = useState(data);
  const pending = useMemo(
    () =>
      data.filter((item) => {
        console.log(data.length);
        return item.completed === false;
      }),
    [data]
  );
  const completed = data.filter((item) => item.completed === true);
  return [pending, completed];
}

export default useFilterTodo;
