import styled from '@emotion/styled';
import { theme } from "@chakra-ui/core";

export const ListWrapper = styled.div`
    flex: 0 1 auto;
    min-width: 300px;
    padding: 15px 15px 30px;
    background-color: ${theme.colors.gray[800]};
    display: flex;
    flex-flow: column;
`;

export const List = styled.ul`
    list-style: none;
    margin-bottom: 20px;
`;
