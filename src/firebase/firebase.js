import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW1OCbZOzA8MWrdGoLLVHGpwHqvDLbxnM",
  authDomain: "marketplace-93cb8.firebaseapp.com",
  projectId: "marketplace-93cb8",
  storageBucket: "marketplace-93cb8.appspot.com",
  messagingSenderId: "348933208105",
  appId: "1:348933208105:web:7f4225d1ddd2ddd9160438"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export{auth};