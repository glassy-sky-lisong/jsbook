var obj1 = Object.create(Object.prototype, {
    foo: {
        value: 1,
        enumerable: true,
        writable: true,
        configurable: false
    },
    name: {
        enumerable: true,
        configurable: false,
        get: function() {
            return name;
        },
        set: function(val) {
            name = val
            console.log(`setname ${val}`)
        }
    }
})

obj1.name = 'lisong'

console.log(obj1, obj1.name)

delete obj1.name

console.log(obj1, obj1.name)