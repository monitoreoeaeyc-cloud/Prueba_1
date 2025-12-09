import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { processAttendance } from "./controllers/attendanceController";

admin.initializeApp();

export const analyzeImage = functions.https.onRequest(processAttendance);
