import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Chat() {
  return (
    <Card>
      <CardActions>
        <Button size="small">
        <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>

        </Button>
      </CardActions>
    </Card>
  );
}