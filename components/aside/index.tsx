import * as React from 'react';
import { Menu, Icon, Button } from 'antd';
import classnames from 'classnames';

export interface AsideItem {
  key: string;
  label: string;
  value: string;
  icon?: string;
}

export interface AsideProps {
  prefixCls: string;
  list: Array<AsideItem>;
  title?: any;
  onClickMenuItem: (asideItem: AsideItem | undefined) => void;
}

export interface AsideState {
  fold: boolean;
}

export default class Aside extends React.Component<AsideProps, any> {
  static defaultProps = {
    prefixCls: 'iloop-aside',
    list: [],
  };

  state: AsideState = {
    fold: false,
  };

  toggle = () => {
    this.setState((prevState: AsideState) => {
      return { fold: !prevState.fold };
    });
  }

  onClickMenu = (e: any) => {
    const { key } = e;
    const asideItem = this.props.list.find((one) => (one.key === key));

    this.props.onClickMenuItem(asideItem);
  }

  render() {
    const { prefixCls, title, list } = this.props;
    const { fold } = this.state;
    const iconType = !fold ? 'menu-fold' : 'menu-unfold';
    const cls = classnames(prefixCls, {
      [`${prefixCls}-unfold`]: !fold,
      [`${prefixCls}-fold`]: fold,
    });

    return (
      <div className={cls}>
        <div className={`${prefixCls}-toggle-btn`}>
          <Button onClick={this.toggle}>
            <Icon type={iconType} />
          </Button>
        </div>
        <div className={`${prefixCls}-holder`}>
          <div className={`${prefixCls}-title`}>
            {title}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            onClick={this.onClickMenu}
          >
            {
              list.map((item) => {
                return (
                  <Menu.Item key={item.key}>
                    <Icon type={item.icon} />
                    <span>{item.label}</span>
                  </Menu.Item>
                );
              })
            }
          </Menu>
        </div>
      </div>
    );
  }
}
