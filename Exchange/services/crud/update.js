import { ref, update } from "firebase/database";
import { database } from '../firebase';

export const updateData = async (path, data) => {
  const updates = {};
  updates[path] = data;
  return update(ref(database), updates)
    .then(() => {
      console.log("Data updated successfully!");
    })
    .catch((error) => {
      console.error("Error updating data:", error);
    });
};


// updateData is an async function that takes a path and data as arguments and updates the data at that path in the database
// the function first creates an object containing the path and data to be updated
// then it updates the data at that location using the update function from the firebase/database module
// if the data is updated successfully, the function logs "Data updated successfully!"
// if an error occurs, the function logs the error using console.error

// updateData
// היא פונקציה אסינכרונית שלוקחת נתיב ונתונים כפרמטרים ומעדכנת את הנתונים באותו נתיב ב
// database
// הפונקציה קודם כל יוצרת אובייקט המכיל את הנתיב והנתונים שיש לעדכן
// לאחר מכן היא מעדכנת את הנתונים במיקום הזה באמצעות הפונקציה
// update
// מהמודול
// firebase/database
// אם הנתונים מתעדכנים בהצלחה, הפונקציה מדפיסה "
// Data updated successfully!
// " אם מתרחשת שגיאה, הפונקציה מדפיסה את השגיאה באמצעות
// console.error
