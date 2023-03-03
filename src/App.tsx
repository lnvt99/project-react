import React from 'react';

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, Card, Row, Col, Input, Button } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

/**
 * Handling left menu
 */
const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

/**
 * Handling navbar
 */
const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

/**
 * Rendering item
 */
const RenderItem: any = () => {
  for (var index = 0; index < 10; index++) {
    return (
      <Col className="gutter-row" span={6}>
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
    ) 
  }
}

const App: React.FC = () => {
  return (
    <Layout hasSider>

      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0,}} >
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>

      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>

        <Content style={{ background: 'white' }}>

          <div style={{ margin: 10, marginLeft: 15 }}>
            <Input placeholder="Basic usage" style={{ width: 200, marginLeft: 10 }} />
            <Button type="primary">Primary Button</Button>
          </div>

          <div style={{ padding: 24 }}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
             <RenderItem/>
             <RenderItem/>
             <RenderItem/>
             <RenderItem/>
             <RenderItem/>
            </Row>
          </div>

        </Content>

        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>

      </Layout>
    </Layout>
  );
};

export default App;