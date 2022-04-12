import app from './app'
import {startConection} from './database'

startConection();
app.listen(3000);
console.log('Server is running on port 3000')
