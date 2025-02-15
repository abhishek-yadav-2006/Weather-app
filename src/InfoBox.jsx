import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./infobox.css"

import CardActionArea from '@mui/material/CardActionArea';

export default function InfoBox({info}){

    // let INIT_URL = "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
   let COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   let RAINY_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?s=2048x2048&w=is&k=20&c=X8ecxMSWW5AaLFBxlzhxvzKSnCy_9apOlhvlJCOp-YU="
   let HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    return (
        <div className="InfoBox">
            <h1>Weatherifo - {info.temp}</h1>
            <div className='cardcontainer'>

            
            <Card  sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity > 80 ? RAINY_URL : info.temp> 20 ? HOT_URL: COLD_URL }
          alt="green iguana"
        />
        <CardContent>
          <Typography  variant="h5" component="div">
          <div className=''>  {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp> 20 ? <WbSunnyIcon/>: <AcUnitIcon/> }  </div>
          </Typography>
          <Typography variant="span" sx={{ color: 'text.secondary' }}>
           <div>
           <p> teperature:  {info.temp} </p>
           <p> humidity: {info.humidity} </p>
            <p> mintemp: {info.mintemp}</p>
            <p> maxtemp: {info.maxtemp}</p>
           <p> description: your weather is <b>{info.description} </b></p>
            
           </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    
    </Card>
    </div>
        </div>
    )
}