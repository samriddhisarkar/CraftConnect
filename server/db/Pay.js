import { connect } from "mongoose";

const connectToMongo = async () => {
    try {
        await connect('mongodb+srv://anuraagkarmakar1706:anu1234@cluster0.73wk6gp.mongodb.net/craftconnect?retryWrites=true&w=majority&appName=Cluster0', {
            dbName: "paymentGateway",
        });
        console.log("---***Database Connected Successfully***---")
    } catch (error) {
        console.log(error);
    }
}

export default connectToMongo;