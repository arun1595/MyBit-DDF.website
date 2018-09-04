import PropTypes from 'prop-types';
import StyledNavigationBar from './StyledNavigationBar';
import Menu from '../Menu';
import Img from '../Img';
import { navigationItems, mobileMenu } from '../../constants';
import SidebarMobile from './SidebarMobile';

export default class NavigationBar extends React.Component{
  state = {
    current: 'Developer',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key
    })
  }

  render() {
    return (
      <StyledNavigationBar>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          items={navigationItems}
          styling={this.props.styling}
          className="navigation--is-desktop"
        />
        <div
          className="hamburger-button"
        >
          <a onClick={() => this.props.handleClickMobileMenu(true)}>
            <Img
              src={"static/menu-icon.svg"}
              alt="Mobile menu button"
            />
          </a>
        </div>
      <SidebarMobile
        open={this.props.sidebarOpen}
        closePopup={this.props.handleClickMobileMenu}
        links={mobileMenu}
      />

      </StyledNavigationBar>
    );
  }
}

NavigationBar.propTypes = {
  styling: PropTypes.object.isRequired,
  sidebarOpen: PropTypes.bool.isRequired,
  handleClickMobileMenu: PropTypes.func.isRequired,
};
