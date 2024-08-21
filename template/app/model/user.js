const { Schema } = require("mongoose")

function initUserModel(app) {
  const UserSchema = new Schema({
    name: {type: String},
    age: {type: Number},
    hobbies: {type: Array},
    team: {type: Schema.Types.ObjectId, ref: 'Team'}
  }, {
    collection: 'user'
  })
  return app.mongoose.model('User', UserSchema)
}


module.exports = initUserModel