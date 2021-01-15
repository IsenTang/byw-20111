const mongoose = require('mongoose');

async function initConnection() {
    await mongoose.connect('mongodb://localhost/test', {
       useNewUrlParser: true,
       useUnifiedTopology: true,
    }, (error) => {
       if (error) {
          console.log(error);
       }
 
       console.log('mongodb connection success');
    });
}

initConnection().then(async ()=>{

    const { Schema } = mongoose;

    const personSchema = new Schema({
        "name" : String,
        "age" : Number,
        "gender" : Number,
        "class" : String,
        "role" : String
    });

    // * model

    const personModel = mongoose.model('persons', personSchema);
    
    // const result = await personModel.find({ age : {$lte:20}}).exec();

    // console.log(result);

    // await personModel.updateOne({name:'isen'},{ $set:{ name:'isen123'}});

    // await personModel.deleteOne({name:'isen123'});

    // const result = await personModel.findOne({ name : 'isen123'}).exec();

    // console.log(result);

    // let model = new personModel({
    //     "name" : 'test',
    //     "age" : 22,
    //     "gender" : 1,
    //     "class" : 'java',
    //     "role" : 'student',
    //     test:2222
    // });

    // await model.save();

    await personModel.updateOne({name:'test'},{ $set:{ age:23,testKey:'test'}});

})
