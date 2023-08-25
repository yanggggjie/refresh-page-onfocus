function App() {
    // 当页面加载时，设置一个标志
    localStorage.setItem('shouldRefreshOnFocus', 'true');
    // 添加一个聚焦事件监听器
    window.addEventListener('focus', function() {
        if (localStorage.getItem('shouldRefreshOnFocus') === 'true') {
            // 清除标志
            localStorage.removeItem('shouldRefreshOnFocus');
            // 刷新页面
            location.reload();
        }
    });
  return (
    <div>
    </div>
  );
}

export default App;
