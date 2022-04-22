import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate ,useLocation} from 'react-router-dom';
import { Typography} from '@material-ui/core';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
  
}

export default function BreadCrumb() {
  const navigate = useNavigate();
  const location = useLocation()
  const pathnames=location.pathname.split('/').filter(x=>x)
  console.log(pathnames);

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="/"
          label='Home'
          icon={<HomeIcon fontSize="small" />}
          onClick={()=>navigate('/')}
          
        />
        

        {pathnames.map((name,index)=>{
          const routeTo=`/${pathnames.slice(0,index+1).join('/')}`
          const isLast = index === pathnames.length-1;
          const isProfile = name ==='profile';
          return isLast || isProfile ? (
              <Typography>{name}</Typography>):(

                <StyledBreadcrumb
                component="a"
                href="/"
                label={name}
                onClick={()=>navigate(routeTo)}
                key={name}
                
              />
              )
          

        })}
      
      </Breadcrumbs>
    </div>
  );
}
