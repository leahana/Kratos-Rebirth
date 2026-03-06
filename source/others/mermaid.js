// Mermaid 初始化配置（Kratos-Rebirth 主题）
// 加载 Mermaid 库并进行初始化

if (typeof mermaid !== 'undefined') {
  mermaid.initialize({
    startOnLoad: true,
    theme: 'neutral', // 使用 neutral 主题（相比 default 更简洁、现代）
    themeVariables: {
      // 调色板：与博客设计协调
      primaryColor: '#f0f4ff',      // 浅蓝背景
      primaryTextColor: '#333333',  // 深灰文字
      primaryBorderColor: '#888888', // 边框颜色
      lineColor: '#888888',         // 线条颜色
      secondBkgColor: '#e8f4f8',    // 次级背景
      tertiaryColor: '#fff',        // 三级颜色
      fontSize: '14px',             // 字体大小
      fontFamily: 'sans-serif',     // 字体族
    },
    securityLevel: 'loose',
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
    },
  });

  // PJAX 加载后重新渲染 Mermaid 图表
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('pjax:success', () => {
      if (typeof mermaid !== 'undefined' && mermaid.contentLoaded) {
        mermaid.contentLoaded();
      }
    });
  }
}
