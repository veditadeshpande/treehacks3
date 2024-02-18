import './App.css';

import Header from './Header';
import Footer from './Footer';
import Chat from './Chat';

import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';

function App() {
  // Sample list of ongoing chats


  return (
    <div className='wrapper'>
      <Header></Header>
        <div className='app-container'>
          <div className='leftChat'> 
          <Button>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
              <Chat />
            </Button>
          </div>
          <div className='rightChat'> </div>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
