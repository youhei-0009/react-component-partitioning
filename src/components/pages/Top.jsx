import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { SecundaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
    const history = useNavigate();
    const onClickAdmin = () => history("/users",{state: {isAdmin: true}});
    const onClickGeneral = () => history("/users",{state: {isAdmin: false}});
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