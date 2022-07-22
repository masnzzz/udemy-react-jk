import { BrowserRouter } from "react-router-dom"
import { PrimaryButton } from "./components/atoms/button/PrimaryButton"
import { SecondaryButton } from "./components/atoms/button/SecondaryButton"
import { SearchInput } from "./components/molecules/SearchInput"
import { UserCard } from "./components/organisms/user/UserCard"
import { DefaultLayout } from "./components/templates/DefaultLayout"
import { HeaderOnly } from "./components/templates/HeaderOnly"

const user = {
  name: "byonbyon",
  image: "https://source.unsplash.com/S7kCexwhPCY",
  email: "1234@mail.com",
  tel: "010120203",
  company: {
    name: "pyopoy.co",
  }
}

export const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>ボタン</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  )
}
