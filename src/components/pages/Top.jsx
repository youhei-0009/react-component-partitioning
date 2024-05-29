import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SecundaryButton } from "../atoms/button/SecondaryButton";
// import { UserContext } from "../../providers/UserProvider";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
    const history = useNavigate();
    //const { setUserInfo } = useContext(UserContext);
    const setUserInfo = useSetRecoilState(userState);
    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true });
        history("/users");
    };
    const onClickGeneral = () => {
        setUserInfo({isAdmin: false});
        history("/users");
    };
    return (
        <SContainer>
            <h2>TOP page</h2>
            <SecundaryButton onClick={onClickAdmin}>Administrator</SecundaryButton>
            <br />
            <br />
            <SecundaryButton onClick={onClickGeneral}>Normal User</SecundaryButton>
        </SContainer>
    )
}

const SContainer = styled.div`
    text-align: center;
`;