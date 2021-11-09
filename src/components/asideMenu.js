import React from 'react';
import { Link } from 'gatsby';

//Styles
import menuStyles from '../styles/asideMenu.module.scss';


const AsideMenu = ({ title, query, path, curtine }) => {

  const menuItems = query ? query.edges.map(item => {
    const { name, slug, id } = item.node;
    if(slug){
      return (
        <li key={id} className={title && title === name ? menuStyles.activeListItem : ""}>
          <Link
            to={path ? `/${path}/${slug}` : ""}
          >
            {name}
          </Link>
        </li>
      )
    } else return
  }) : null;

  return (
    <nav className={menuStyles.menu}>
      <ul>
        {menuItems}
      </ul>
    </nav>
  );
}

export default AsideMenu;