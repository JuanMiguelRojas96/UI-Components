import styled from "@emotion/styled";

export const InfoCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 150px;
  background-color: var(--primary-gray);
  border-radius: 8px;
  padding: 16px;
`;

export const InfoCardTitle = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  color: var(--primary-white);
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;

  div {
    margin-right: 12px;
  }
`;

export const InfoCardCuantity = styled.p`
  color: var(--primary-white);
  font-weight: 600;
  font-size: 48px;
  margin: 12px 0;
  text-align: left;
`;

export const InfoCardDescription = styled.p`
  color: var(--tertiary-gray);
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  text-align: left;
  word-break: break-all;
`;
