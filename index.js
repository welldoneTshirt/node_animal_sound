const express = require('express')

const cors = require('cors')

const app = express()
const port = 3000


app.use(cors())
// 비워놓으면 모든 요청에 대해서 응답을 해주겠다

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q.id)
    const q = req.query
    console.log(q)

    res.send({'userid':q.name, 'userage':q.age
    })
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params
    console.log(name);
    if(name == "dog") {
        res.json({'sound':'멍멍'})
    } else if(name=="cat") {
        res.json({'sound':'야옹'})
    } else if(name=="pig") {
        res.json({'sound':'꿀꿀'})
    } else {
        res.json({'sound':'알수없음'})
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})