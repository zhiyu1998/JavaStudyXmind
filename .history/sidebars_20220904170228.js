/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  "目录": [
    {
      type: 'category',
      label: 'Go语言',
      items: [
        {
          type: 'doc',
          id: 'golang/learnInProblem',
          label: '从问题中学习到Go的精髓'
        }
      ]
    },
    {
      type: 'category',
      label: '前端',
      items: [
        {
          type: 'doc',
          id: 'frontend/react/react',
          label: 'React'
        },
        {
          type: 'doc',
          id: 'frontend/typescript/typescript',
          label: 'TypeScript'
        },
        {
          type: 'doc',
          id: 'frontend/vue/vue',
          label: 'Vue2和Vue3'
        }
      ]
    },
    {
      type: 'category',
      label: '基础知识',
      items: [
        {
          type: 'doc',
          id: 'fundamental/datastruct',
          label: '数据结构（应试版）'
        }
      ]
    },
    {
      type: 'category',
      label: 'Java基础',
      items: [
        {
          type: 'doc',
          id: 'Java/basic/basic',
          label: '基础知识'
        },
        {
          type: 'doc',
          id: 'Java/concurrent/concurrent',
          label: '并发编程'
        },
        {
          type: 'category',
          label: '虚拟机',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Java/jvm/part1',
            }
          ]
        },
        {
          type: 'doc',
          id: 'Java/fm/Spring',
          label: 'Spring'
        },
        {
          type: 'doc',
          id: 'Java/fm/SpringMVC',
          label: 'SpringMVC'
        },
        {
          type: 'doc',
          id: 'Java/fm/Mybatis',
          label: 'Mybatis'
        },
        {
          type: 'doc',
          id: 'Java/fm/SpringBoot',
          label: 'SpringBoot'
        },
        {
          type: 'doc',
          id: 'Java/fm/SpringDataJpa',
          label: 'SpringDataJpa'
        },
        {
          type: 'doc',
          id: 'Java/fm/SpringSecurity',
          label: 'SpringSecurity'
        },
        {
          type: 'doc',
          id: 'Java/fm/SpringCloud',
          label: 'SpringCloud'
        },
        {
          type: 'doc',
          id: 'Java/docker/main',
          label: 'Docker'
        },
        {
          type: 'doc',
          id: 'Java/integration/main',
          label: 'SpringBoot整合其他框架'
        },
        {
          type: 'doc',
          id: 'Java/kotlin/kotlin',
          label: 'Kotlin with Spring'
        }
      ]
    },
    {
      type: 'category',
      label: 'Java面试',
      items: [
        {
          type: 'doc',
          id: 'Java/eightpart/main/',
          label: '大厂面试题'
        },
        {
          type: 'doc',
          id: 'Java/eightpart/personal',
          label: '常见面试题精选'
        },
        {
          type: 'doc',
          id: 'Java/leetcode/leetcode',
          label: '力扣刷题顺序'
        },
        {
          type: 'category',
          label: '刷题汇总',
          items: [
            {
              type: 'autogenerated',
              dirName: 'Java/leetcode/src',
            }
          ]
        }
      ]
    }
  ],
};

module.exports = {
  sidebars
};
