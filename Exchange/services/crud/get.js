import { ref, get } from "firebase/database";  // ref = reference to the database location we want to read from 
import { database } from '../firebase'; // database = the Firebase Realtime Database service from file firebase.js 



// Get data from the database at the specified path 
export const getData = async (path) => {                                             
  const dbRef = ref(database, path);
  try {
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

// get data is async function that takes a path as an argument and returns the data at that path in the database  (if it exists) 
// the function first creates a reference to the database location we want to read from using the ref function from the firebase/database module 
// then it tries to get the data at that location using the get function from the same module
// if the data exists, the function returns the data using the val method on the snapshot object
// if the data does not exist, the function logs "No data available" and returns null
// if an error occurs, the function logs the error using console.error


// get data
// היא פונקציה אסינכרונית שלוקחת נתיב כפרמטר ומחזירה את הנתונים שנמצאים באותו נתיב ב
// database
// (אם הם קיימים)
// הפונקציה קודם כל יוצרת הפניה (
// reference
// ) למיקום ב
// database
// ממנו אנחנו רוצים לקרוא באמצעות הפונקציה
// ref
// מהמודול
// firebase/database
// לאחר מכן היא מנסה לקבל את הנתונים במיקום הזה באמצעות הפונקציה
// get
// מאותו מודול
// אם הנתונים קיימים, הפונקציה מחזירה את הנתונים באמצעות השיטה
// val
// על אובייקט ה
// snapshot
// אם הנתונים אינם קיימים, הפונקציה מדפיסה "
// No data available
// " ומחזירה
// null
// אם מתרחשת שגיאה, הפונקציה מדפיסה את השגיאה באמצעות
// console.error