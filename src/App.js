import './App.css';
import UserCard from './components/UserCard';


export const userList = [
  {
    "id": 0,
    "name": "Ömer",
    "title": "Frontend-Dev",
    "link": "https://bing.com"
  },
  {
    "id": 1,
    "name": "Ayşe",
    "title": "Backend-Dev",
    "link": "https://bing.com"
  },
  {
    "id": 2,
    "name": "Zeki",
    "title": "Frontend-Dev",
    "link": "https://bing.com"
  },

  {
    "id": 3,
    "name": "Zeki",
    "title": "Frontend-Dev",
    "link": "https://bing.com"
  },

  {
    "id": 4,
    "name": "Zeki",
    "title": "Frontend-Dev",
    "link": "https://bing.com"
  },

  {
    "id": 5,
    "name": "Zeki",
    "title": "Frontend-Dev",
    "link": "https://bing.com"
  }
]


function App() {
  return (
    <>
        <UserCard users={userList} />
    </>
  );
}

export default App;
