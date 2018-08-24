#!/usr/bin/env node

let links = []
if (process.argv.length <=2) {
     console.log(`请传入需要转码的链接`)
     return;
}

links = process.argv.slice(2)

links.map((link) => {
    const regex = /^thunder:\/\/([\w+/=]+)/
    const result = regex.exec(link)

    if (!result) {
        console.error(`出错了，${link}不是迅雷链接`)
        return;
    }
    let trueResult = ''
    try {
        // 简单正则匹配链接，不严谨
        trueResult = /^AA([\w/.:\u4e00-\u9fa5]+)ZZ$/.exec(new Buffer(result[1], 'base64').toString())[1]
        console.log(trueResult)
    } catch (error) {
        console.log(`解析地址出错，怪我咯`)
    }
})
