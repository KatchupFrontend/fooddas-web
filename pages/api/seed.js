import User from "../../models/User";
import db from "../../context/db";
import data from "../../data/data";


const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
 
  await db.disconnect();
  res.send({ message: "seeded successfully " });
};

export default handler;
