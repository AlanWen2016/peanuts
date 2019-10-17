/**
 * 
 * @param {*} array 
 * @description 数组洗牌，此代码段使用Fisher-Yates算法随机排序数组的元素。
 * @returns Array
 * @example
 * const foo = [1, 2, 3];
 * shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
 */
const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};


/**
 * 
 * @param {*} array 
 * @description 根据parent_id生成树结构
 * @returns Array
 * @example
 *  const comments = [
 *   { id: 1, parent_id: null },
 *   { id: 2, parent_id: null },
 *   { id: 3, parent_id: 1 },
 *   { id: 4, parent_id: 2 },
 *   { id: 5, parent_id: 4 }
 *   ];
 *  nest(comments);
  */
const nest = (items, id = null, link = 'parent_id') => items
    .filter(item => item[link] === id).map(item => ({ ...item, children: nest(items, item.id) }));

export { nest, shuffle}