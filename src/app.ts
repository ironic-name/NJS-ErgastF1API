import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
const PORT = 8732;

import routesDrivers from "./routes/drivers.js";
import routesConsturctors from "./routes/constructors.js";
import routesPitStop from "./routes/pitstops.js";
import routesLaps from "./routes/laps.js";
import routesStandingConstructors from "./routes/standingsConstructors.js";
import routesStandingDrivers from "./routes/standingsDrivers.js";
import routesRaceSchedule from "./routes/raceSchedule.js";
import routesStatus from "./routes/status.js";
import routesCircuit from "./routes/circuits.js";
import routesSeason from "./routes/season.js";
import routesQualifying from "./routes/qualifying.js";
import routesRaceResults from "./routes/raceResults.js";

//add Filters
app.use("/drivers", routesDrivers);//DONE
app.use("/constructors", routesConsturctors);//DONE
app.use("/pitstops", routesPitStop);//DONE
app.use("/laps", routesLaps);//DONE
app.use("/standings/constructors", routesStandingConstructors);//DONE
app.use("/standings/drivers", routesStandingDrivers);//DONE BUT THE PART OF CONSTRUCTORS IS MISSING
app.use("/races", routesRaceSchedule);//DONE
app.use("/status", routesStatus);//DONE
app.use("/circuits", routesCircuit);//DONE
app.use("/seasons", routesSeason);//DONE
app.use("/qualifying", routesQualifying);//DONE
app.use("/results", routesRaceResults);//DONE

//TODO: add last and next params

app.get("", (req, res) => {
    res.status(200).send("Hi!");
});

app.use((req, res, next) => {
    res.status(404).send("<h3>Bad Request</h3>");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});