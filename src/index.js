// Get Styles
import "./styles.css";
import "./modal-styles.css";

// GET the code for the Update Log window 
import "./modal.js";

// GET the init function from base.js
import { init } from "../src/controller/app.js";

// GET Database from data.js
import { localDatabase } from "./data.js";

// Calling the Init function in this Index file:
localDatabase();
init();

