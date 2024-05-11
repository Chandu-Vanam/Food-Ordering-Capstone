import React from 'react';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import BuyerDashboard from '../Buyer/BuyerDashboard';
import VendorDashboard from '../Vendor/VendorDashboard';
import animation from '../../../assets/img/landing-image.gif';
import { user_is_authenticated, user_type } from '../../../lib/auth';


const Home = () => {
    const matches = useMediaQuery('(min-width:480px)');

    return (
        <div>
            {!user_is_authenticated() ?
                matches ?
                    <div className="welcome-page">
                        <img 
                        src={animation} 
                        alt="Loading..."
                        style={{
                            margin: "3rem",
                            marginTop: "20rem",
                            height: "400px",
                            width: "400px"
                        }}
                        />
                        <Typography className="welcome-heading" variant="h3" component="h3">
                            Welcome to the Online Food Ordering Website
                        </Typography>
                        <Typography variant="h6" component="h1">
                            Please login / register to continue
                        </Typography>
                    </div>
                    :
                    <div className="welcome-page">
                        <Typography className="welcome-heading" variant="h4" component="h3">
                        Welcome to the Online Food Ordering Website
                        </Typography>
                        <Typography variant="h6" component="h1">
                            Please login / register to continue
                        </Typography>
                    </div>
                :
                <div>
                    {user_type() === 'buyer' ?
                        <BuyerDashboard />
                        :
                        <VendorDashboard />
                    }
                </div>
            }
        </div>
    );
};

export default Home;
