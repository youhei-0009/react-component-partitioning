import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/input";
import { memo } from "react";

export const SearchInput = memo(() => {
    return (
        <>
            <SContainer>
                <Input placeholder="Input search terms"/>
                <SButtonWrapper>
                    <PrimaryButton>Search</PrimaryButton>
                </SButtonWrapper>
            </SContainer>
        </>
    );
});

const SContainer = styled.div`
    display: flex;
    align-items: center;
`;

const SButtonWrapper = styled.div`
    padding-left: 8px;
`;