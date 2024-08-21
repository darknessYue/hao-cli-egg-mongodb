const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    const db = client.db('test');
    const res = await db.command({ ping: 1 });
    console.log('result', res);
    const collection = db.collection('class');
    // const result = await collection.find();
    // const result = await collection.insertOne({
    //   "name": "stack",
    //   "age": 28,
    //   "city": "shanghai"
    // });
    // console.log('result', result);
    const _id = new ObjectId("66bb0461166a623fbfc94de0")

    // const cursor = collection.find()
    // // 1、forEach
    // await cursor.forEach(item => {
    //   console.log('item', item);
    // })
    // // 2、toArray
    // const arr = await collection.find({}, {
    //   sort: { age: -1 },
    //   limit: 2,
    //   projection: {
    //     _id: 0,
    //   }
    // }).toArray();
    // console.log('arr', arr);

    // replaceOne UpdateOne
    // const updateDoc = await collection.updateOne({
    //   _id
    // }, {
    //   // $set: {
    //   //   name: 'jede'
    //   // },
    //   $inc: {
    //     age: 1
    //   },
    //   // 更新数组内容 位置修改
    //   // $push: { // 添加或替换
    //   //   hobbies: {
    //   //     $each: ['游泳'],
    //   //     $position: 1
    //   //   } 
    //   // },
    //   // $pop: { // 头和尾进行修改
    //   //   hobbies: 1 // 1 或者-1
    //   // },
    //   // $pull: { // 删除指定项
    //   //   hobbies: '游泳'
    //   // },
    //   // $set: {
    //   //   "hobbies.1": "跑步"
    //   // },
    //   // 查询数组内容并替换

    // })
    // console.log('updateDoc', updateDoc);

    
    // const one = await collection.findOne({
    //   _id
    // });
    // console.log('one', one);

    const updateArr = await collection.findOne({
      // hobbies:{ 
      //   $all: ['跑步'], //部分符合即可查找出来
      // },
      // hobbies: '跑步' // 同$all
      hobbies: { // 模糊查询
        $regex: /跑步/g
      }
    })
    console.log('updateArr', updateArr);

    // update array item by $
    const updateFilter = {
      $set: {
        "hobbies.$": "跑步步跑步步"
      }
    }
    
    const updateArrayItem3 = await collection.updateOne({
      _id,
      hobbies: '跑步步'
    }, updateFilter);
    console.log('updateArrayItem3', updateArrayItem3);
    const one = await collection.findOne({
      _id
    });
    console.log('one', one);

  } catch (error) {
    
  } finally {
    await client.close();
  }
}

run()
