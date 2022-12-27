import { useContext } from "react";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Protected = ({ children }) => {
  const router = useRouter();
  // check if the user is authenticated
  const {user} = UserAuth();

  useEffect(() => {
  if (!user) {
    // if the user is not authenticated, redirect to the login page
    router.push("/Login");
  }
    }, [user]);


  return children;
};

export default Protected;

