import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import {
  NavLink,
} from "react-router-dom";
import { router } from '../../router'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
interface IRuterItem {
  path: string;
  name?: string;
}

const SubMenuType = (obj: IRuterItem) => {
  return <>
    <NavLink to={obj.path}>
      <div>{obj.name}</div>
    </NavLink>
  </>
}
const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem(SubMenuType(router[1]), '1'),
    getItem(SubMenuType(router[2]), '2'),
    getItem(SubMenuType(router[3]), '3'),
    getItem(SubMenuType(router[4]), '4'),
  ]),
  getItem('English', 'sub2', <AppstoreOutlined />, [
    getItem(SubMenuType(router[5]), '5'),
    getItem(SubMenuType(router[6]), '6'),
    getItem(SubMenuType(router[7]), '13'),
    getItem('Submenu', 'sub3', null, [getItem(SubMenuType(router[11]), '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem(SubMenuType(router[8]), '9'),
    getItem(SubMenuType(router[9]), '10'),
    getItem(SubMenuType(router[10]), '11'),
    getItem('Option 12', '12'),
  ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const MenuCom: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 200 }}
      items={items}
    />
  );
};

export default MenuCom;
