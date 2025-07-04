
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";
export default function InfoBox ({info}) {
    const initUrl = "https://images.unsplash.com/photo-1673191898498-9bac443b2407?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hotUrl = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const coldUrl = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rainUrl = "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.weather }</h1>
            <div className="info-container">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? rainUrl : info.temp >15 ? hotUrl : coldUrl}
                    title="Dusty Weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    <div>
                        {info.humidity > 80 ? <ThunderstormIcon/> : info.temp >15 ? <SunnyIcon/> : <AcUnitIcon/>}
                    </div>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Humidity: {info.humidity}</p>
                    <p>Min Temp: {info.tempMin}&deg;C</p>
                    <p>Max Temp: {info.tempMax}&deg;C</p>
                    <p><i>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</i></p>
                    </Typography>
                </CardContent>
                
                </Card>
            </div>
        </div>
    )
}