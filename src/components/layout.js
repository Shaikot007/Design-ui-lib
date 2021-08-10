import React from 'react';
import Link from 'next/link';
import { makeStyles, withStyles } from '@material-ui/styles';
import { styled, alpha } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BarChartIcon from '@material-ui/icons/BarChart';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import TouchAppOutlinedIcon from '@material-ui/icons/TouchAppOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import FilterDramaOutlinedIcon from '@material-ui/icons/FilterDramaOutlined';
import FormatShapesIcon from '@material-ui/icons/FormatShapes';
import SettingsOverscanOutlinedIcon from '@material-ui/icons/SettingsOverscanOutlined';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';

const drawerWidth = 100;

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    backgroundColor: "#663399"
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2px 0px 2px 0px',
    height: '50px',
    width: '80px',
    borderRadius: '5px'
  },
  listItemIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: 'white'
  },
  text: {
    fontSize: '10px'
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 15px 0px 15px',
    backgroundColor: 'white',
    color: '#663399',
    boxShadow: 'none'
  },
  cardWidth: {
    minWidth: 250,
    margin: '80px 25px 80px 25px',
    border: 'solid #3981F7 2px',
    cursor: 'pointer'
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsFirst: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    color: '#663399'
  },
  iconsSecond: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    color: '#3981F7'
  },
  iconsThird: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    color: '#5DAE49'
  },
  iconsFourth: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    color: '#FFC620'
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '0px 2px 0px 2px',
    width: '80%'
  },
  titleHead: {
    fontSize: '12px',
  },
  titleHeadFirst: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#663399'
  },
  titleHeadSecond: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#3981F7'
  },
  titleHeadThird: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#5DAE49'
  },
  titleHeadFourth: {
    fontSize: '25px',
    fontWeight: 'bold',
    color: '#FFC620'
  },
  childrenComponents: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-50px'
  },
  badge: {
    color: '#663399'
  }
});

const ListItem = withStyles({
  root: {
    color: '#663399',
    "&$selected": {
      backgroundColor: "#663399",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    },
    "&$selected:hover": {
      backgroundColor: "#663399",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    },
    "&:hover": {
      backgroundColor: "#663399",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white"
      }
    }
  },
  selected: {}
})(MuiListItem);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border: 'solid white 2px',
  borderRadius: '25px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    border: 'solid #3981F7 2px'
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const menuItems = [
    {
      text: 'Dashboard',
      icon: <BarChartIcon />,
      path: '/'
    },
    {
      text: 'Table',
      icon: <DesktopWindowsIcon />,
      path: '/table'
    },
    {
      text: 'Note',
      icon: <NoteAddOutlinedIcon />,
      path: '/table'
    },
    {
      text: 'Comment',
      icon: <CommentOutlinedIcon />,
      path: '/table'
    },
    {
      text: 'Click',
      icon: <TouchAppOutlinedIcon />,
      path: '/table'
    },
    {
      text: 'Users',
      icon: <AccountBoxOutlinedIcon />,
      path: '/table'
    },
    {
      text: 'Weather',
      icon: <FilterDramaOutlinedIcon />,
      path: '/table'
    },
    {
      text: 'Shape',
      icon: <FormatShapesIcon />,
      path: '/table'
    },
    {
      text: 'Screen',
      icon: <SettingsOverscanOutlinedIcon />,
      path: '/table'
    }
  ];

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        sx={{ height: '64px', width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        className={classes.appBar}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton
            size="large"
            aria-label="show my location"
            color="inherit"
          >
            <MyLocationIcon />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 3 new notifications"
            color="inherit"
          >
            <Badge badgeContent={3} className={classes.badge}>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List className={classes.list}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div" className={classes.headerText}>
              Gull
            </Typography>
          </Toolbar>
          {menuItems.map((item, index) => (
            <Link href={item.path} key={index}>
              <ListItem
                button
                className={classes.listItem}
                selected={selectedIndex === index}
                onClick={(event) => handleListItemClick(event, index)}
              >
                <ListItemIcon
                  className={classes.listItemIcon}
                  style={{ color: 'white'}}
                >
                  {item.icon}
                </ListItemIcon>
                <Typography
                  className={classes.text}
                >
                  {item.text}
                </Typography>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <div className={classes.childrenComponents}>
        {children}
      </div>
    </div>
  );
};
