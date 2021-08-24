import config from "./lib/config";
import app from "./src/app";

app.listen(config.port,()=>{
    console.log(`App is listening in port ${config.port}`);
    
})