import styled from 'styled-components'

export const ProductContainer = styled.div`
    padding: 16px;
    background-color: #f5f5f5;
    border: 6px solid red;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;    
`;

export const ProductImage = styled.img`
    width: 100%;
    max-width: 200px;
    height: auto;
`;

export const CardButton = styled.button`
    background-color: red;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 50px;
    margin-top: 20px;
    width: 150px;
    margin-bottom: 10px;

    &:hover{
        background-color: green;
    }
`;

