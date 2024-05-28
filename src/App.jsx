import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecundaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

const user = {
  name: "Jakexe",
  image: "https://rb.gy/5q25zg",
  email: "12345@email.com",
  phone: "090-9999-9999",
  company: {
    name: "test.co.ltd",
  },
  website: "https://google.com",
};

export default function App() {
  return (
    <>
      <div className="App">
        <PrimaryButton>Button</PrimaryButton>
        <SecundaryButton>Search</SecundaryButton>
        <br />
        <SearchInput />
        <UserCard user={user}/>
      </div>
    </>
  );
}
