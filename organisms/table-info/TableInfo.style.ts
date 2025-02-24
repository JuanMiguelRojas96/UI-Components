import styled from "@emotion/styled";

export const TableInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  background-color: var(--primary-gray);
  padding: 24px;
  border-radius: 8px;
`;

export const TableInfoHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;

  h2 {
    color: var(--primary-white);
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
  }
`;