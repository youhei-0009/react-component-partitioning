import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map(((val) => {
    return {
        id: val,
        name: `Jakexe-${val}`,
        image: "https://rb.gy/5q25zg",
        email: "12345@email.com",
        phone: "090-9999-9999",
        company: {
        name: "test.co.ltd",
        },
        website: "https://google.com",
    }
}));

export const Users = () => {
    return (
        <SContainer>
            <h2>User List</h2>
            <SearchInput />
            <SUserArea>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
            </SUserArea>
        </SContainer>
    )
}

const SContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const SUserArea = styled.div`
    padding-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
`;