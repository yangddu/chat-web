import SideNav from './components/Navigation/SideNav';
import TopNav from './components/Navigation/TopNav';
import Messenger from './pages/Messenger/Messenger';

function App() {
  return (
    <div className="App">
      <TopNav />
      <div style={{ display: 'flex' }}>
        <SideNav />
        <Messenger />
      </div>
    </div>
  );
}

export default App;
