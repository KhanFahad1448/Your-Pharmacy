import React, { createContext, useState, useEffect, useContext } from "react";
import { auth, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          const role = userData.role || "user";
          setUser({ uid: currentUser.uid, role, ...userData });
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const signUp = async (email, password, firstName, lastName = "") => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user.uid;

      await setDoc(doc(db, "users", uid), {
        uid,
        email,
        firstName,
        lastName,
        role: "user",
        createdAt: new Date(),
      });

      setUser({ uid, email, firstName, lastName, role: "user" });
      toast.success("Signup successful!");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const logIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user.uid;

      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const role = userData.role || "user";

        setUser({ uid, role, ...userData });

        if (role === "admin") {
          toast.success(`👋 Hello ${userData.firstName}, logged in as Admin`);
        } else {
          toast.success(`Welcome back, ${userData.firstName}!`);
        }
      } else {
        toast.error("User profile not found!");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
