import styles from './header.module.scss';
import { Icons } from '@cocokits/common-icons';
import {
  SvgIcon,
  FormField,
  Input,
  IconButton,
  Prefix,
  Suffix,
} from '@cocokits/react-components';

export function Header() {
  return (
    <nav className={styles['header']}>
      {/* menu  */}
      <div className={styles['menu']}>
        <IconButton type="secondary" size="md" color="brand">
          <SvgIcon icon={Icons.dollar} />
        </IconButton>
        <IconButton
          className={styles['menu_icon']}
          type="secondary"
          size="md"
          color="brand"
        >
          <SvgIcon icon={Icons.info} />
        </IconButton>
        <ul className={styles['nav_links']}>
          <li>
            <a href="#">
              Home
              <SvgIcon size="lg" icon={Icons.arrowHeadDown} />
            </a>
          </li>
          <li>
            <a href="#">
              Products
              <SvgIcon size="lg" icon={Icons.arrowHeadDown} />
            </a>
          </li>
          <li>
            <a href="#">
              Pricing
              <SvgIcon size="lg" icon={Icons.arrowHeadDown} />
            </a>
          </li>
          <li>
            <a href="#">
              Contact
              <SvgIcon size="lg" icon={Icons.arrowHeadDown} />
            </a>
          </li>
        </ul>
      </div>
      {/* search */}
      <IconButton
        className={styles['search_btn']}
        type="secondary"
        size="md"
        color="brand"
      >
        <SvgIcon icon={Icons.search} />
      </IconButton>
      <FormField className={styles['search']}>
        <Input  placeholder="Search ..." />
        <Prefix>
          <SvgIcon
            size="xl"
            icon={Icons.search}
          ></SvgIcon>
        </Prefix>
      </FormField>
    </nav>
  );
}

export default Header;
