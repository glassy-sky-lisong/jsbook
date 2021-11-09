let demoData = [
    {
        id: '001',
        name: '001'
    },
    {
        id:'002',
        name: '002'
    },
    {
        id: '003',
        name: '004'
    },
    {
        id: '004',
        name: '004'
    },
    {
        id: '005',
        name: '005'
    },
    {
        id:'006',
        name: '006'
    },
    {
        id: '007',
        name: '007'
    },
    {
        id: '008',
        name: '008'
    }
]

/**
 * 
 * @param  data pageData
 * @param  index startIndex
 * @param  offset per page data count
 */
const pageHandler = (data, index, offset) => {
  //   不进行写操作可以不用深拷贝
  //   const dataConer = [].concat(data)
  const temp = new Array()

//   temp.findIndex
/**
 *   offset > 0
 *   index >= 0
 *   start = index - 1
 *   end = index * offset - 1
 *   next = index * offset
 *   
 *   bound condition
 *   start >= 0                  >>     index > 1
 *   start <= end <= data.length >>     offset > 0 && (index * offset - data.length >= 0 && (index - 1) * offset - data.length <= 0)
 * 
 *   取值策略
 *   满一个offset，则取一个offset， 
 *   if (index * offset - 1)(end) - data.length <= 0
 * 
 *   start = index - 1
 *   end = index * offset - 1
 *   不满则都取
 *   else
 * 
 *   start = index - 1
 *   end = data.length
 */

    // @var page start index
    let start = index >= 0 ? index - 1 : -1
    // @var page end index
    let end = offset > 0 ? index * offset - 1 : -1 
    // @var 是否可以分页
    const isNext = () => { 
        if (start !== -1 && end !== -1) { 
            return index * offset <= data.length - 1
         } else { 
            return false;
        } 
    }
    let next = isNext() ? index * offset : -1

    data.map((item, i) => {
        start = index -1 >= 0 ?  (index -1) * offset : return
        end =  index * offset - 1  index * offset - data.length = [ 0 ,offset ]
        next = index * offset
        if ( i > (index - 1) * offset ) {
            console.log(item.id * 1)
        }
        return item
    })
}

pageHandler(demoData, 0, 0)

console.log(demoData)

