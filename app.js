const express = require('express')
const fs = require('fs')
const path = require('path')
const router = require('./server/router')
const app = express()

const resolve = file => {
    path.resolve(__dirname,file)
}

app.use(router)




app.listen(3000, function () {
    console.log('访问地址为 localhost:3000')
})