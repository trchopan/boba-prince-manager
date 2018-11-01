import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { config } from "@/firebase.conf";

export const usersCol = "users";

firebase.initializeApp(config);
export const fireAuth = firebase.auth();
export const fireStore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
fireStore.settings(settings);
