function cook() {
    console.log(`${this.name} 正在做饭`)
}

var cat = {
    name: 'tomcat'
}

var adviceFunc = function (thisArgs) {
    console.log('------增强前置功能--------')
    cook.call(thisArgs)
    console.log('------增强后置功能--------')
}

adviceFunc(cat)