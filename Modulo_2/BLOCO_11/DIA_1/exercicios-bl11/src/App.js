import './App.css';

const task = (value) => (
  <li>{value}</li>
);

const taskList = ['acordar', 'tomat café', 'olhar o Telegram', 'olhar o WhatsApp', 'olhar o Instagram', 'olhar o email', 'olhar o Slack', 'olhar o LinkedIn'];

const App = () => (
  <ul>{taskList.map((item) => task(item))}</ul>
);

export default App;
