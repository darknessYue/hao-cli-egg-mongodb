const { MongoClient, ObjectId } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

async function run() {
  try {
    await client.connect()
    const db = client.db('test')
    const collection = db.collection('mapbson')
    // let testArr = []
    // for(let i = 0; i <= 50000; i++) {
    //   testArr.push({
    //     type: 'test',
    //     name: `test${i}`,
    //     age: i
    //   })
    // }
    // const result = await collection.insertMany(testArr)
    // console.log('result', result)
    // const _id = new ObjectId('66bb2681fe0c502f64ec4d83')
    const item50000 = await collection.find({
      name: 'name50000'
    }).explain()
    console.log('item50000', item50000)

    // 建立正序索引
    // const result = await collection.createIndex({
    //   name: 1
    // })
    // console.log(result)

    // 查看索引
    // const indexResult = await collection.listIndexes().toArray()
    // console.log('indexResult', indexResult)

    // 删除索引
    // const dropResult = await collection.dropIndex({
    //   name: 1
    // })
    // console.log('dropResult', dropResult)
  } catch (error) {
    console.log('error', error)
  } finally {
    await client.close()
  }
}

run()