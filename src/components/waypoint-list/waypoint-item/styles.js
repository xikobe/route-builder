import styled from '@emotion/styled';
import { theme } from "@chakra-ui/core";

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.gray[300]};
    padding: 10px;
    border-bottom: 1px solid ${theme.colors.green[900]};
`

export const CopyWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`
