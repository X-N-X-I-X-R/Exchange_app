import { ref, remove } from "firebase/database";
import { database } from '../firebase';

export const deleteData = async (path) => {
  return remove(ref(database, path))
    .then(() => {
      console.log("Data deleted successfully!");
    })
    .catch((error) => {
      console.error("Error deleting data:", error);
    });
};



// deleteData is an async function that takes a path as an argument and deletes the data at that path in the database
// the function first creates a reference to the database location we want to delete from using the ref function from the firebase/database module
// then it deletes the data at that location using the remove function from the same module
// if the data is deleted successfully, the function logs "Data deleted successfully!"
// if an error occurs, the function logs the error using console.error

// deleteData
// היא פונקציה אסינכרונית שלוקחת נתיב כפרמטר ומוחקת את הנתונים באותו נתיב ב
// database
// הפונקציה קודם כל יוצרת הפניה (
// reference
// ) למיקום ב
// database
// ממנו אנחנו רוצים למחוק באמצעות הפונקציה
// ref
// מהמודול
// firebase/database
// לאחר מכן היא מוחקת את הנתונים במיקום הזה באמצעות הפונקציה
// remove
// מאותו מודול
// אם הנתונים נמחקים בהצלחה, הפונקציה מדפיסה "
// Data deleted successfully!
// " אם מתרחשת שגיאה, הפונקציה מדפיסה את השגיאה באמצעות

