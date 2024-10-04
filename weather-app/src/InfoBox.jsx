import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {

    const INIT_URL="https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    

    return(
        <div className="InfoBox">
            <div className="cardcon">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color= 'text.secondary' component={"span"} >
          <p>Temprature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}&deg;C</p>
          <p>Min temp={info.tempMin}&deg;C</p>
          <p>Max temp={info.tempMax}</p>
          <p>The weather can be described as <b>{info.weather}</b> and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}