import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecundaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';

export default function App() {
  return (
    <>
      <div className="App">
        <PrimaryButton>Button</PrimaryButton>
        <SecundaryButton>Search</SecundaryButton>
        <br />
        <SearchInput />
      </div>
    </>
  );
}
