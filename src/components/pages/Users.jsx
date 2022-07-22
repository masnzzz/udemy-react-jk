import styled from "styled-components"
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
    return {
        id: val,
        name: `byonbyon${val}`,
        image: "https://source.unsplash.com/S7kCexwhPCY",
        email: "1234@mail.com",
        tel: "010120203",
        company: {
            name: "pyopoy.co",
        }
    }
}))

export const Users = () => {
    return (
        <Scontainer>
            <h2>User一覧</h2>
            <SearchInput />
            <SUserArea>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </SUserArea>
        </Scontainer>
    )
}

const Scontainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

// 画面の幅に応じてグリッドのアイテムが自動調整できるCSS
const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`;
