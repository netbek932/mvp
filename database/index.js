const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mealdb',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const mealSchema = mongoose.Schema(
  {
    meal: {type: String, unique: true}
  }
)

const Meal = mongoose.model('Meal', mealSchema);

const save = (item) => {
  console.log(mongoose.connection.readyState)
  var newMeal = new Meal ({
    //_id: { type: Meal.ObjectId, auto: true },
    meal: item
  })
  console.log(newMeal)
  newMeal.save()
  .then(result => console.log('Successfully saved meal item to the DB!'))
  .catch((err) => {
    console.log('Error saving meal item');
    return err;
  })
}

const getRandom = () => {
  console.log('inside getrandom')
  Meal.count().exec(function (err, count) {
    var random = Math.floor(Math.random() * count);
    Meal.findOne().skip(random).exec(
      function (err, result) {
        console.log(result);
        return result;
      }
    )
  })
}

module.exports.save = save;
module.exports.getRandom = getRandom;