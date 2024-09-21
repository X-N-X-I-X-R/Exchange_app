import { ref, set } from "firebase/database";
import { database } from '../firebase';

export const postData = async(path, data) => {
  return set(ref(database, path), data)
    .then(() => {
      console.log("Data saved successfully!");
    })
    .catch((error) => {
      console.error("Error saving data:", error);
    });
};






















// postData is an async function that takes a path and data as arguments and saves the data at that path in the database
// the function first creates a reference to the database location we want to write to using the ref function from the firebase/database module
// then it saves the data at that location using the set function from the same module
// if the data is saved successfully, the function logs "Data saved successfully!"
// if an error occurs, the function logs the error using console.error


// postData
// היא פונקציה אסינכרונית שלוקחת נתיב ונתונים כפרמטרים ושומרת את הנתונים באותו נתיב ב
// database
// הפונקציה קודם כל יוצרת הפניה (
// reference
// ) למיקום ב
// database
// ממנו אנחנו רוצים לכתוב באמצעות הפונקציה
// ref
// מהמודול
// firebase/database
// לאחר מכן היא שומרת את הנתונים במיקום הזה באמצעות הפונקציה
// set
// מאותו מודול
// אם הנתונים נשמרים בהצלחה, הפונקציה מדפיסה "
// Data saved successfully!
// " אם מתרחשת שגיאה, הפונקציה מדפיסה את השגיאה באמצעות 
// console.error
