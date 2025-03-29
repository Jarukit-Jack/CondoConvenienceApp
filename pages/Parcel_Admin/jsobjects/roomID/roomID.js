export default {
  generateData: () => {
    const data = [];
    for (let i = 101; i <= 130; i++) {
      data.push({
        name: i.toString(),  // Name will be 101, 102, ..., 130
        code: (1000 + (i%100)).toString()  // Code will be 1001, 1002, ..., 1030
      });
    }
    return data;
  }
}
