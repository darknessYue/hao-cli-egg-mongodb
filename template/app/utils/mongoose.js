const { connect, Schema, model, disconnect } = require('mongoose');

async function main() {
  try {
    await connect('mongodb://127.0.0.1:27017/test');
    console.log('mongodb connected successful')
    // const ProductSchema = new Schema({
    //   name: {type: String},
    //   price: {type: Number}
    // });
    // const productModel = model('Product', ProductSchema);
    // // const result = await productModel.create({
    // //   name: 'cellphone',
    // //   price: 1300
    // // });
    // const ipad = new productModel({
    //   name: 'ipad',
    //   price: 3000
    // });
    // await ipad.save()
    // console.log('result', ipad);
    const UserSchema = new Schema({
      name: {type: String},
      age: {type: Number},
      hobbies: {type: Array},
      team: {type: Schema.Types.ObjectId, ref: 'Team'}
    }, {
      collection: 'user'
    })
    const UserModel = model('User', UserSchema)
    // await UserModel.create({
    //   name: 'zhangsan',
    //   age: 31,
    //   hobbies: ['basketball', 'football']
    // })
    const result = await UserModel.find({age: {$gte: 30}}).exec()
    console.log('result', result);
  } catch (error) {
    console.log(error)
  } finally {
    await disconnect();
  }
}

main()
