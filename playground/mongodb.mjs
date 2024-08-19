import { MongoClient } from 'mongodb';

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(connectionURL);

const rundb = async () => {
    try {
        await client.connect()
        const db = client.db(databaseName)
    //     try {
    //         const result = await db.collection('users').insertOne({
    //             name:'Noble',
    //             age: 26,
    //             location:'aba'
    //         })
    //         console.dir(result);
    //     } catch (error) {
    //         console.log(error)
    //     }

            // try {
            //     const result = await db.collection('movies').insertMany([
            //         {description:'What men want', watched:true},
            //         {description:'fast x', watched:true},
            //         {description:'barbie',watched:false}
            //     ])
            //     console.log(result)
            // } catch (e) {
            //     console.log(e)
            // }

            // try {
            //     // const movie = await db.collection('movies').findOne({description:'fast x'},
            //     // {sort:{description:1},projection:{_id:0,description:1}})
            //     // const movie = await db.collection('movies').findOne({_id:new ObjectId("65958eff4c99762053188731")})

            //     const movie = await db.collection('movies').find({watched:false}).toArray()
            //     console.log(movie)
            // }catch (e) {
            //     console.log(e)
            // }

            // try {
            //     // const result = await db.collection('movies').updateOne({_id:new ObjectId('65958eff4c99762053188730')},
            //     // {$set:{description:'What menzzz want'}})
            //     // console.log(result)

            //     const result = await db.collection('movies').updateMany({watched:false},
            //         {$set:{watched:true}})
            //         console.log(result)
            // }catch (e) {
            //     console.log(e)
            // }

            try {
                // const result = await db.collection('movies').deleteOne({_id:new ObjectId('65958eff4c99762053188730')})
                // console.log(result)//to have the deleted item returned in result use findOneAndDelete() instead.

                const result = await db.collection('movies').deleteMany({watched:true})
                console.log(result)
            }catch (e) {
                console.log(e)
            }
    } catch {
        console.log('unsuccessful')
    } finally {
        client.close()
    }
}

rundb();