import styled from 'styled-components'

const StyledNavigationBar = styled.div`
  display: inline-block;

  .ant-menu{
    background-color: transparent;
    border: none;
    color: white;
    display: inline-block;
    position: absolute;
    right: 20px;
    top: 55px;
  }

  li{
    font-size: 16px;
  }
`;

export default StyledNavigationBar;