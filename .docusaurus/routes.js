import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '502'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '9e5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ea0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '0e8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '6ad'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'bbf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'da0'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive', '4ae'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'e6e'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', '9c3'),
    exact: true
  },
  {
    path: '/tags/docusaurus',
    component: ComponentCreator('/tags/docusaurus', '8c1'),
    exact: true
  },
  {
    path: '/tags/facebook',
    component: ComponentCreator('/tags/facebook', 'b74'),
    exact: true
  },
  {
    path: '/tags/hello',
    component: ComponentCreator('/tags/hello', 'd2b'),
    exact: true
  },
  {
    path: '/welcome',
    component: ComponentCreator('/welcome', 'bf6'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ec1'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd58'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '553'),
            routes: [
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '961'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', '66d'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '5ba'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', 'f00'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '859'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '35e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '2c8'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '732'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', '072'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '048'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', 'a66'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '7af'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
