import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
export const Users = () => {
  const users = [...Array(10).keys()].map((val) => {
    return {
      id: val,
      name: `まさや${val}`,
      image: "https://source.unsplash.com/2l0CWTpcChI",
      email: "1234@example.com",
      phone: "000-0000-0000",
      company: {
        name: "members",
      },
      website: "https://google.com",
    };
  });
  return (
    <SContainer>
      <h2>User一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
