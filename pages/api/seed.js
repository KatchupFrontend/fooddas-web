import User from "../../models/User";
import db from "../../context/db";
import data from "../../data/data";


const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  // {
  //   name: "kyle",
  //   email: "kyleadmin@gmail.com",
  //   password: bcrypt.hashSync("powersam360", 8),
  //   isAdmin: true,
  // },
  // {
  //   name: "kyle",
  //   email: "powersam360@gmail.com",
  //   password: bcrypt.hashSync("powersam360", 8),
  //   isAdmin: false,
  // },

  await db.disconnect();
  res.send({ message: "seeded successfully " });
};

export default handler;
