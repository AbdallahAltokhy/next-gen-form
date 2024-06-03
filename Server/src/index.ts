import  express from 'express';
import  dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
dotenv.config();
// Routers
import parseRouter from './routers/parseRouter';


const app = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}


// middleware
app.use(cors(corsOptions) )
app.options('*', cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
app.use('/api/parse', parseRouter);

// health check
app.get('/', (req, res) => {
  res.send('Server is up and running');
});

// start server
const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => console.log(`App listening on port ${port} 🚀🕺🏻🎯🚀`));

