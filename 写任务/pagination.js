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

const pageHelper = {
    isNext: (data, index, offset) => {
        if(Object.prototype.toString.call(data) !== '[object Array]'
         || index < 1 || offset <= 0
        ) throw new Error('data or index or offset invaild')
        // @var page start index 
        let start = ( index - 1 ) * offset
        // @var page end index
        // let end = index *offset - 1 <= data.length ? index * offset - 1 : data.length

        return start <= data.length - 1
    },
    pagination: (data, index, offset) => {
        //   不进行写操作可以不用深拷贝
        //   const dataConer = [].concat(data)

        // 校验参数格式、规范参数边界
        if (Object.prototype.toString.call(data) !== '[object Array]' 
          || index < 1
          || offset <= 0
        ) throw new Error('index should >= 1 or offset should > 0 or data should an Array !')

        // 如果data为空，则返回空数组
        if (data.length === 0) return []   


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
        let start =  (index - 1) *  offset
        // @var page end index
        let end = index * offset > data.length ? data.length - 1 : index * offset - 1

        // filter method for trim    
        return pageHelper.isNext(data, index, offset) ? data.map((item, i) => {
            if (i >= start && i <= end ) {
                return item
             }
        }).filter( (item) => item ) : []
    }
}


// const testData = pageHandler(demoData, 2, 8)
console.log(pageHelper.isNext(demoData, 4, 3), pageHelper.pagination(demoData, 3, 2))

