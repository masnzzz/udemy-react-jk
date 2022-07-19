import { PrimaryButton } from "./components/atoms/button/PrimaryButton"
import { SecondaryButton } from "./components/atoms/button/SecondaryButton"
import { SearchInput } from "./components/molecules/SearchInput"

export const App = () => {

  return (
    <div className="App">
      <PrimaryButton>ボタン</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
    </div>
  )
}
