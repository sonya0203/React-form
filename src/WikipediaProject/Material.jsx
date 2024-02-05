import * as React from 'react';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';

export default function DrawerMobileNavigation({ _open, _setopen }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    setOpen(_open);
  }, [_open]);

  const handleClose = () => {
    _setopen(false);
  };

  return (
    <React.Fragment>
      <Drawer open={_open} onClose={handleClose}
       sx={{
        width: '250px', // Set your desired width here
        flexShrink: 0,
        paddingLeft:'200px'
      }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column', // Ensures children stack vertically
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2,
            width: '200px', // Set your desired width here
            // maxHeight: '80vh', // Set your desired max height here
            overflowY: 'auto',
            paddingLeft:'200px' // Allow vertical scrolling when content exceeds maxHeight
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: 'pointer' }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />

          {/* Your scrollable content here */}
          <List
            size="lg"
            component="nav"
            sx={{
              flex: 'none',
              fontSize: 'xl',
              '& > div': { justifyContent: 'center' },
            }}
          >
            <ListItemButton sx={{ fontWeight: 'lg' }}>Home</ListItemButton>
            <ListItemButton>Main menu</ListItemButton>
            <ListItemButton><a href='#'>Main page</a></ListItemButton>
            <ListItemButton><a href='#'>Contents</a></ListItemButton>
            <ListItemButton><a href='#'>Current events</a></ListItemButton>
            <ListItemButton><a href='#'>Random article</a></ListItemButton>
            <ListItemButton><a href='#'>About Wikipedia</a></ListItemButton>
            <ListItemButton><a href='#'>Contact us</a></ListItemButton>
            <ListItemButton><a href='#'>Donate</a></ListItemButton>
            <ListItemButton>Contribute</ListItemButton>
            <ListItemButton><a href='#'>Help</a></ListItemButton>
            <ListItemButton><a href='#'>Learn to edit</a></ListItemButton>
            <ListItemButton><a href='#'>Community portal</a></ListItemButton>
            <ListItemButton><a href='#'>Recent changes</a></ListItemButton>
            <ListItemButton><a href='#'>Uplod file</a></ListItemButton>
            
            {/* Add more items as needed */}
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
