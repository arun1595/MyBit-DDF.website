import styled from 'styled-components'

const StyledNavigationBar = styled.div`
  display: inline-block;
  position: absolute;
  right: 20px;
  top: 55px;

  li{
    font-size: 16px;
  }

  .ant-menu-item-selected{
    a{
      color: ${props => props.styling ? props.styling.itemSelectedColor : "inherit"} !important;
    }
  }

  .ant-menu-overflowed-submenu{
    display: none;
  }

  @media (max-width: 1000px) {
    .ant-menu-item{
      margin-right: 30px;
    }

    .ant-menu-submenu{
      margin-right: 30px;
    }
  }

  .navigation--is-desktop{
    @media (max-width: 900px) {
      display: none;
    }
  }

  .hamburger-button{
    display: none;
    position: relative;
    top: 20px;
    right: 60px;

    & img{
      width: 20px;
    }

    @media (max-width: 900px) {
      display: block;
      right: 20px;
      top: -15px;
    }
  }
`;

export default StyledNavigationBar;
