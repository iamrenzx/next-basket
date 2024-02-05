import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHooli,
  faLyft,
  faPiedPiper,
  faStripe,
  faAws,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

const CompanyIcons = () => {
  const icons = [faHooli, faLyft, faPiedPiper, faStripe, faAws, faReddit];
  return (
    <Grid
      container
      px={{ xl: 35, md: 10, xs: 5 }}
      py={10}
      spacing={3}
      textAlign="center"
      gap={{ xs: 3, md: 0 }}
    >
      {icons.map((icon) => (
        <Grid item xs={12} md={2}>
          <FontAwesomeIcon color="#737373" fontSize={100} icon={icon} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CompanyIcons;
