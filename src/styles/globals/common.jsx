'use client'
import styled from "styled-components";
export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Tag = styled.li`
  display: flex;
  border-radius: 12px;
  border: 1px solid var(--tag-border-color);
  background: var(--prompt-tag-color);
  color: var(--tag-font-color);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.13px;
  padding: 4px 8px;
  height: fit-content;
`;